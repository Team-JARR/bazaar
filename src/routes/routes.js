'use strict';

const express = require('express');
const bearerAuth = require('../auth/middleware/bearerAuth');
const permissions = require('../auth/middleware/acl.js');

const router = express.Router();
const { listing } = require('../models');

router.get('/listing', bearerAuth, permissions('read'), handleGetAll);
router.get('/listing/:id', bearerAuth, permissions('read'), handleGetOne);
router.post('/listing', bearerAuth, permissions('create'), handleCreate);
router.put('/listing/:id', bearerAuth, permissions('update'), handleUpdate);
router.delete('/listing/:id', bearerAuth, permissions('delete'), handleDelete);

async function handleGetAll(req, res) {
  let allRecords = await listing.findAll();
  res.status(200).json(allRecords);
}

async function handleGetOne(req, res) {
  const id = req.params.id;
  let oneRecord = await listing.findOne({ where: { id } });
  res.status(200).json(oneRecord);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await listing.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  const foundRecord = await listing.findOne({ where: { id } });
  let updatedRecord = await foundRecord.update(obj);
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await listing.destroy({ where: { id } });
  res.status(200).json(deletedRecord);
}

module.exports = router;
