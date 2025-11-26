const Card = require("../models/Card");

// CREATE
exports.createCard = async (req, res) => {
    try {
        const {
            title,
            description,
            status,
            priority,
            dueDate,
            tags,
            order
        } = req.body;

        const card = await Card.create({
            title,
            description,
            status,
            priority,
            dueDate,
            tags,
            order
        });

        return res.status(201).json(card);

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// GET ALL
exports.getCards = async (req, res) => {
    try {
        const cards = await Card.findAll();
        return res.json(cards);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// GET BY ID
exports.getCardById = async (req, res) => {
    try {
        const { id } = req.params;

        const card = await Card.findByPk(id);
        if (!card) return res.status(404).json({ error: "Card not found" });

        return res.json(card);

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// UPDATE
exports.updateCard = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            title,
            description,
            status,
            priority,
            dueDate,
            tags,
            order
        } = req.body;

        const card = await Card.findByPk(id);
        if (!card) return res.status(404).json({ error: "Card not found" });

        await card.update({
            title,
            description,
            status,
            priority,
            dueDate,
            tags,
            order
        });

        return res.json(card);

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// DELETE
exports.deleteCard = async (req, res) => {
    try {
        const { id } = req.params;

        const card = await Card.findByPk(id);
        if (!card) return res.status(404).json({ error: "Card not found" });

        await card.destroy();
        return res.json({ message: "Card deleted" });

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
