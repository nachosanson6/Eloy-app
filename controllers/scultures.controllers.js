const router = require("express").Router()
const Sculpture = require('./../models/Sculpures.model')

const newSculpture = (req, res, next) => {
    const { name, photo1, photo2, photo3, height, width, prize, materials } = req.body

    Sculpture
        .create({ name, photo1, photo2, photo3, height, width, prize, materials })
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

module.exports = {
    newSculpture,
    getAllSculptures,
    getOneSculpture,
}