'use strict';

// the model has to come from the index driver file
const {Users, db} = require('../models/index');

/**
 * Want to test a single transaction
 */
describe('sequelize model persist, restore', () => {
  beforeEach(async () => {
    await db.sync();
  });

  afterAll(async () => {
    await db.drop();
  });

  it('should persist current state', async () => {
    //
  });

  it('should restore previous state', async () => {
    // const user = await Users.model.findOne({});
  });
});
