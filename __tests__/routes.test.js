'use strict';

const supertest = require('supertest');
const { db } = require('../src/models/index');
const server = require('../src/server');
const request = supertest(server.server);


beforeAll(async()=>{
  await db.sync();
});
afterAll(async()=>{
  await db.drop();
});
let token = null;


describe('Testing authenticated /listing route with admin user', () => {

  it('Should create a listing using POST', async () => {

    const responseUser = await request.post('/signup').send({
      username: 'Happy',
      password: 'Gilmore',
      role: 'admin'
    })
    const userObject = responseUser.body.user;
    token = userObject.token;
    let response = await request
      .post('/listing')
      .send({
        itemName: 'Bicycle',
        condition: 'good',
        description:'90s Trek',
        price: 500,
        obo: true,
        barter: false
      })
      .set('Authorization', `Bearer ${token}`)

    expect(response.status).toBe(201);
    expect(response.body.itemName).toBe('Bicycle');
    expect(response.body.id).toBe(1);
  });

  it('Should read all listings using GET', async () => {
    let response = await request
      .get('/listing')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
  });

  it('Should be able to read single listing by username and listing Id using GET /listing/user/:id ', async () => {
    let response = await request
      .get('/listing/user/1')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(1);
    expect(response.body.itemName).toBe('Bicycle');
  });
  it('Should read one listing from user using GET /listing/user', async () => {
    let response = await request
      .get('/listing/user')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
  });

  it('Should search listings from query using GET /listing/search', async () => {

  let response = await request
  .get('/listing/search?q=Bicycle')
  .set('Authorization', `Bearer ${token}`);

  expect(response.status).toBe(200);
  expect(typeof response.body).toEqual('object');
});
  it('Should update a listing using PUT /listing/user', async () => {
    let response = await request
      .put('/listing/user/1')
      .send({ itemName: 'iPad', condition: 'new' })
      .set('Authorization', `Bearer ${token}`)

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(1);
    expect(response.body.itemName).toBe('iPad');
    expect(response.body.condition).toBe('new');
  });

  it('Should destroy a record using DELETE', async () => {
    let response = await request
      .delete('/listing/user/1')
      .set('Authorization', `Bearer ${token}`);

    let check = await request
      .get('/listing/user/1')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toBe(1);
    expect(check.body).toBeNull();
  });
});
