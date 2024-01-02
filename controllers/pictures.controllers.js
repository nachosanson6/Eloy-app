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

const filteredPictures = (req, res, next) => {

    const { height, width, colors } = req.body
    const filters = {}

    if (height) {
        filters.height = height;
    }

    if (width) {
        filters.width = width;
    }

    if (colors) {
        filters.colors = { $in: colors.split(',') };
    }

    Picture.find(filters)
        .then((paintings) => {
            res.json(paintings);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Error en el servidor' });
        });
}

const deletePicture = (req, res, next) => {

    const { picture_id } = req.params

    Picture
        .findByIdAndDelete(picture_id)
        .then(() => res.sendStatus(202))
        .catch(err => next(err))
}

module.exports = {
    newPicture,
    getAllPictures,
    getOnePicture,
    filteredPictures,
    deletePicture
}