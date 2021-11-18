const supertest = require('supertest');
const { db } = require('../src/data/index');
const server = require('../src/server');

const request = supertest(server.server);

beforeAll(async () => {
  await db.drop();
  await db.sync();
});

afterAll(async () => {
  // await db.drop();
});
let token = null;

describe('Testing authenticated /listing route with admin user', () => {
  it('Should create a listing using POST', async () => {
    const responseUser = await request.post('/signup').send({
      username: 'happy',
      password: 'Gilmore',
      role: 'admin',
    });
    await request.post('/signup').send({
      username: 'sad',
      password: 'Gilmore',
      role: 'admin',
    });
    const userObject = responseUser.body.user;
    token = userObject.token;
    const response = await request
      .post('/listing')
      .send({
        itemName: 'Bicycle',
        condition: 'good',
        description: '90s Trek',
        price: 500,
        obo: true,
        barter: false,
      })
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(201);
    expect(response.body.itemName).toBe('Bicycle');
    expect(response.body.id).toBe(1);
  });
});
