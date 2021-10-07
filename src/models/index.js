'use strict';

require('dotenv').config();
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
const { Sequelize, DataTypes} = require('sequelize');

const Collection = require('./lib/collection');
const foodSchema = require('./food.schema');
const dessertSchema = require('./dessert.schema');

const sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
} : {};

const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);
const foodModel = foodSchema(sequelize, DataTypes);
const dessertModel = dessertSchema(sequelize, DataTypes);

const foodCollection = new Collection(foodModel);
const dessertCollection = new Collection(dessertModel);

module.exports = {
    db: sequelize,
    Food: foodCollection,
    Dessert: dessertCollection,
};