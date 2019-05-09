module.exports = {
    identity: 'user',
    datastore: 'default',
    primaryKey: 'id',
    attributes: {
        id: {
            type: 'number',
            autoMigrations: { autoIncrement: true }
        },
        firstName: { type:'string' },
        lastName: { type:'string' },
        email: { type:'string' }
    }
};