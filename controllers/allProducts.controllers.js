const router = require("express").Router()
const Jewelry = require("../models/Jewelry.model")
const Picture = require("../models/Pictures.model")
const Sculpture = require("../models/Sculpures.model")

const getAllPhotos = (req, res, next) => {
    const picturesPromise = Picture.find();
    const sculpturesPromise = Sculpture.find();
    const jewelryPromise = Jewelry.find();

    Promise.all([picturesPromise, sculpturesPromise, jewelryPromise])
        .then(([pictures, sculptures, jewelry]) => {
            const allItems = [
                ...pictures.map(item => item.photo ),
                ...sculptures.map(item =>  item.photo ),
                ...jewelry.map(item =>  item.photo )
            ];
            res.json(allItems);
        })
        .catch(err => {
            next(err);
        });
};

module.exports = {
    getAllPhotos
}