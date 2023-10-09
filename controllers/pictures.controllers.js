const router = require("express").Router()
const Picture = require('./../models/Pictures.model')

const newPicture = (req, res, next) => {
    const { name, photo, height, width, prize, colors } = req.body

    Picture
        .create({ name, photo, height, width, prize, colors })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const getAllPictures = (req, res, next) => {

    Picture
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOnePicture = (req, res, next) => {

    const { picture_id } = req.params

    Picture
        .findById(picture_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    newPicture,
    getAllPictures,
    getOnePicture,
}