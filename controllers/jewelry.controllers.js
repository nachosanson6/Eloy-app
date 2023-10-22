const router = require("express").Router()
const Jewelry = require('./../models/Jewelry.model')

const newJewelry = (req, res, next) => {
    const { name, photo, prize, materials } = req.body

    Jewelry
        .create({ name, photo, prize, materials })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const getAllJewelry = (req, res, next) => {

    Jewelry
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOneJewelry = (req, res, next) => {

    const { Jewelry_id } = req.params

    Jewelry
        .findById(Jewelry_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const filteredJewelry = (req, res, next) => {

    const { materials } = req.body
    const filters = {}

    if (materials) {
        filters.materials = { $in: materials.split(',') };
    }

    Jewelry.find(filters)
        .then((jewelry) => {
            res.json(jewelry);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Error en el servidor' });
        });
}

module.exports = {
    newJewelry,
    getAllJewelry,
    getOneJewelry,
    filteredJewelry,
}