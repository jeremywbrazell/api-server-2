'use strict';

const express = require('express');

const foodCollection = require('../models/index.js').Food;

const router = express.Router();

router.get('/food', getFood);
router.get('/food/:id', getOneFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

async function getFood(req, res) {
    let foods = await foodCollection.read();
    res.status(200).json(foods);
}

async function getOneFood(req, res) {
    let id = req.params.id;
    let food = await foodCollection.read(id);
    res.status(200).json(food);
}

async function createFood(req, res) {
    let obj = req.body;
    let food = await foodCollection.create(obj);
    res.status(200).json(food);
}

async function updateFood(req, res) {
    let id = req.params.id;
    const obj = req.body;
    let updatedFood = await foodCollection.update(id, obj);
    res.status(200).json(updatedFood);
}

async function deleteFood(req, res) {
    let id = req.params.id;
    let deletedFood = await foodCollection.delete(id);
    res.status(200).json(deletedFood);
}

module.exports = router;