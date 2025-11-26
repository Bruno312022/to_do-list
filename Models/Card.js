const { DataTypes } = require("sequelize");
const sequelize = require("../Database/db");

const Card = sequelize.define("Card", {
    cardId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    status: {
        type: DataTypes.ENUM("todo", "in_progress", "done"),
        defaultValue: "todo"
    },

    priority: {
        type: DataTypes.ENUM("low", "medium", "high"),
        defaultValue: "medium"
    },

    dueDate: {
        type: DataTypes.DATE,
        allowNull: true
    },

    tags: {
        type: DataTypes.JSON,
        allowNull: true
    },

    order: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

module.exports = Card;
