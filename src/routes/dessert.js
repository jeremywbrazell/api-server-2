'use strict';

const express = require('express');

// const Dessert = require('../models/index.js').Dessert;
const { Dessert } = require('../models/index.js');

const router = express.Router();

router.get('/dessert', getdessert);
router.get('/dessert/:id', getOnedessert);
router.post('/dessert', createdessert);
router.put('/dessert/:id', updatedessert);
router.delete('/dessert/:id', deletedessert);

async function getdessert(req, res) {
    let desserts = await Dessert.read();
    res.status(200).json(desserts);
}

async function getOnedessert(req, res) {
    let id = req.params.id;
    let dessert = await Dessert.read(id);
    res.status(200).json(dessert);
}

async function createdessert(req, res) {
    let obj = req.body;
    console.log("this is the object", obj);
    let dessert = await Dessert.create(obj);
    res.status(200).json(dessert);
}

async function updatedessert(req, res) {
    let id = req.params.id;
    const obj = req.body;
    let updateddessert = await Dessert.update(id, obj);
    res.status(200).json(updateddessert);
}

async function deletedessert(req, res) {
    let id = req.params.id;
    let deleteddessert = await Dessert.delete(id);
    res.status(200).json(deleteddessert);
}

module.exports = router;