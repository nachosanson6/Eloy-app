const router = require("express").Router()
const Jewelry = require('./../models/Jewelry.model')
const generateName = require('./../modules/nameGenerator'); // Ajusta la ruta según tu estructura de carpetas

const newJewelry = async (req, res, next) => {
    try {
        const { photo, prize, materials, sold } = req.body;

        // Obtén la lista de nombres existentes en la base de datos
        const existingNames = await Jewelry.distinct('name');

        // Genera un nuevo nombre basado en los materiales y nombres existentes
        const generatedName = generateName("Bisutería", materials, existingNames);

        // Crea la nueva joyería utilizando el nombre generado
        await Jewelry.create({ name: generatedName, photo, prize, materials, sold });

        res.sendStatus(200);
    } catch (error) {
        next(error);
    }
};

const getAllJewelry = (req, res, next) => {

    Jewelry
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOneJewelry = (req, res, next) => {

    const { jewelry_id } = req.params
    Jewelry
        .findById(jewelry_id)
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
const deleteJewelry = async (req, res, next) => {
    const { jewelry_id } = req.params;

    Jewelry
        .findByIdAndDelete(jewelry_id)
        .then(() => res.sendStatus(202))
        .catch(err => next(err))
};

module.exports = {
    newJewelry,
    getAllJewelry,
    getOneJewelry,
    filteredJewelry,
    deleteJewelry
}