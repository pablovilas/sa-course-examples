const server = require('../server');
const request = require('supertest');

const app = server.init();

const users = [
  { 
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com'
  }
];

describe("routes: /users", () => {

  test("should respond an array of users", async () => {
    const response = await request(app).get('/users');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body.data).toEqual(users);
  });

});

describe("routes: /users/:id", () => {

  test("should respond user with id #1 John Doe", async () => {
    const response = await request(app).get('/users/1');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual(users[0]);
  });

  test("should respond user with id #2 not exists", async () => {
    const response = await request(app).get('/users/2');
    expect(response.status).toEqual(404);
    expect(response.type).toEqual('application/json');
  });

});