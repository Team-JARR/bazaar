'use strict';

const { db, listing } = require('../src/data/index');

beforeAll(async()=>{
  await db.sync();
});
afterAll(async()=>{
  await db.drop();
});
describe('Testing our sequelize listing model', () => {

  it('Should be able to create a listing', async () => {

    let newListing = await listing.create({
      itemName: 'bat',
      condition: 'fair',
      description:'baseball bat',
      price: 400,
      obo: true,
      barter: false,
      createdBy: 'roop'
    });

    expect(newListing.id).toBe(1);
    expect(newListing.itemName).toBe('bat');
    expect(newListing.condition).toBe('fair');
    expect(newListing.description).toBe('baseball bat');
    expect(newListing.price).toBe(400);
    expect(newListing.obo).toBe(true);
    expect(newListing.barter).toBe(false);
    expect(newListing.createdBy).toBe('roop');

  });
});
