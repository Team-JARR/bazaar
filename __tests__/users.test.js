'use strict';

const supertest = require('supertest');
const { db } = require('../src/models/index');
const server = require('../src/server');
const base64 = require('base-64');
const request = supertest(server.server);

beforeAll(async()=>{
  await db.sync();
});
afterAll(async()=>{
  await db.drop();
});

describe ('Testing authentication routes',()=>{
  it('Should be able to create a new User', async ()=>{
    const response = await request.post('/signup').send({
      username: 'John',
      password: 'doe123',
      role: 'user'
    })
    const userObject = response.body.user;
    expect(response.status).toBe(201);
    expect(userObject.username).toBe('John');
    expect(typeof userObject.token).toBe('string');
  })

  it ('Should be able to sign in with an encoded auth header', async () => {
    let encodedUserPass = base64.encode(`John:doe123`);
    
    const response = await request.get('/signin').set({
      Authorization: `Basic ${encodedUserPass}`,
    });

    expect(response.status).toEqual(200);
  });
})
