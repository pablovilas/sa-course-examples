const sqlite3 = require('sqlite3');
const config = require('config');
const UserRepository = require('./userRespository');
const FileReader = require('../utils/fileReader');
const User = require('../models/user');

module.exports = class UserSqliteRepository extends UserRepository {
    constructor() {
        console.log('Using user sqlite respository');
        super();
        this.db = initDb();
        load(this.db);
    }
    async findAll(limit, offset) {
        return await this.all(
            `SELECT * FROM person LIMIT ? OFFSET ?`,
            [limit, offset]
        );
    }
    async findById(id) {
        return await this.get(
            `SELECT * FROM person WHERE id = ?`,
            [id]
        );
    }
    async get(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.get(sql, params, (err, result) => {
                if (err) {
                    console.log(`Error running sql: ${sql}`);
                    console.log(err);
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
    async all(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.all(sql, params, (err, result) => {
                if (err) {
                    console.log(`Error running sql: ${sql}`);
                    console.log(err);
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}

function initDb() {
    let db = new sqlite3.Database(config.get('data.db'), sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(`Error while connecting to the database: ${err.message}`);
        }
        console.log('Connected to the database.');
    });
    db.run('CREATE TABLE IF NOT EXISTS person (id INTEGER PRIMARY KEY, height REAL NOT NULL, weight REAL NOT NULL);');
    return db;
}

async function load(db) {
    try {
        const result = await FileReader.readCVS(config.get('data.file'));
        await saveToDb(result, db);
    } catch (err) {
        console.log(`Error while loading data file: ${err}`);
    }
}

async function saveToDb(input, db) {
    input.shift(); // Remove CSV headers
    for (item of input) {
        let id = parseInt(item[0]);
        let height = parseFloat(item[1]);
        let weight = parseFloat(item[2]);
        db.run(`INSERT OR REPLACE INTO person(id, height, weight) VALUES(?, ?, ?)`, [id, height, weight]);
    }
}