'use strict';

const desserts = (sequelize, DataTypes) => sequelize.define('Desserts', {
    calories: {
    type: DataTypes.INTEGER,
    allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    origin: {
        type: DataTypes.STRING,
        allowNull: false,

    }
})

module.exports = desserts;