const router = require("express").Router()
const Sculpture = require('./../models/Sculpures.model')

const newSculpture = (req, res, next) => {
    const { name, photo, photo2, photo3, height, width, prize, materials } = req.body

    Sculpture
        .create({ name, photo, photo2, photo3, height, width, prize, materials })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const getAllSculptures = (req, res, next) => {

    Sculpture
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOneSculpture = (req, res, next) => {

    const { sculpture_id } = req.params

    Sculpture
        .findById(sculpture_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const filteredSculptures = (req, res, next) => {

    const { height, width, materials } = req.body
    const filters = {}

    if (height) {
        filters.height = height;
    }

    if (width) {
        filters.width = width;
    }

    if (materials) {
        filters.materials = { $in: materials.split(',') };
    }

    Sculpture.find(filters)
        .then((sculptures) => {
            res.json(sculptures);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Error en el servidor' });
        });
}

module.exports = {
    newSculpture,
    getAllSculptures,
    getOneSculpture,
    filteredSculptures,
}