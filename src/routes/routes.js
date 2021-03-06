const express = require('express');
const bearerAuth = require('../auth/middleware/bearerAuth');
const permissions = require('../auth/middleware/acl.js');

const router = express.Router();
const { listing } = require('../data');

router.get('/listing', handleGetAll);
router.get('/listing/user', bearerAuth, permissions('read'), handleGetAllOneUser);
router.get('/listing/user/:id', bearerAuth, permissions('read'), handleGetOne);
router.get('/listing/search', handleGetAllQuery);
router.post('/listing', bearerAuth, handleCreate);
router.put('/listing/user/:id', bearerAuth, permissions('update'), handleUpdate);
router.delete('/listing/user/:id', bearerAuth, permissions('delete'), handleDelete);

async function handleGetAll(req, res) {
  const allRecords = await listing.findAll();
  res.status(200).json(allRecords);
}

async function handleGetAllQuery(req, res) {
  const itemName = req.query.q;
  const allRecords = await listing.findAll({ where: { itemName } });
  res.status(200).json(allRecords);
}


async function handleGetAllOneUser(req, res) {
  const createdBy = req.user.username;
  const userRecords = await listing.findAll({ where: { createdBy } });
  res.status(200).json(userRecords);
}
async function handleGetOne(req, res) {
  const createdBy = req.user.username;
  const { id } = req.params;
  const oneRecord = await listing.findOne({ where: { id, createdBy } });

  res.status(200).json(oneRecord);
}
async function handleCreate(req, res) {
  const obj = {
    itemName: req.body.itemName,
    condition: req.body.condition,
    description: req.body.description,
    price: req.body.price,
    obo: req.body.obo,
    barter: req.body.barter,
    createdBy: req.user.username,
  };
  const newRecord = await listing.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const { id } = req.params;
  const createdBy = req.user.username;
  const obj = req.body;
  const foundRecord = await listing.findOne({ where: { id, createdBy } });
  const updatedRecord = await foundRecord.update(obj);
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  const { id } = req.params;
  const createdBy = req.user.username;
  const deletedRecord = await listing.destroy({ where: { id, createdBy } });
  res.status(200).json(deletedRecord);
}

module.exports = router;
