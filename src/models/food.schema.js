'use strict';

const food = (sequelize, DataTypes) => sequelize.define('Food', {
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

module.exports = food;