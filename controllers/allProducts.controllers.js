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
                ...pictures.map(item => ({ photo: item.photo, product: item.product, sold: item.sold })),
                ...sculptures.map(item => ({ photo: item.photo, product: item.product, sold: item.sold })),
                ...jewelry.map(item => ({ photo: item.photo, product: item.product, sold: item.sold }))
            ];
            res.json(allItems);
        })
        .catch(err => {
            next(err);
        });
};

const getAllProducts = async (req, res, next) => {
    try {
        const pictures = await Picture.find();
        const sculptures = await Sculpture.find();
        const jewelry = await Jewelry.find();

        const allItems = [
            ...pictures.map(item => ({ type: 'picture', ...item.toObject() })),
            ...sculptures.map(item => ({ type: 'sculpture', ...item.toObject() })),
            ...jewelry.map(item => ({ type: 'jewelry', ...item.toObject() }))
        ];

        res.json(allItems);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllPhotos,
    getAllProducts
}