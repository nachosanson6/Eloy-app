const router = require("express").Router()
const Sculpture = require('./../models/Sculpures.model')
const generateName = require('./../modules/nameGenerator'); // Ajusta la ruta según tu estructura de carpetas

const newSculpture = async (req, res, next) => {
    try {
        const { photo, photo2, photo3, height, width, prize, materials, sold } = req.body;

        // Obtén la lista de nombres existentes en la base de datos
        const existingNames = await Sculpture.distinct('name');

        // Genera un nuevo nombre basado en los materiales y nombres existentes
        const generatedName = generateName("Escultura", materials, existingNames);

        // Crea la nueva escultura utilizando el nombre generado
        await Sculpture.create({ name: generatedName, photo, photo2, photo3, height, width, prize, materials, sold });

        res.sendStatus(200);
    } catch (error) {
        next(error);
    }
};

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

const getSculpturesPhotos = (req, res, next) => {
    const sculpturePromise = Sculpture.find({ sold: false });

    sculpturePromise
        .then((sculptures) => {
            const allItems = sculptures.map(item => ({ photo: item.photo, product: item.product, sold: item.sold, _id: item._id }));
            res.json(allItems);
        })
        .catch(err => {
            next(err);
        });
};

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

const editSculpture = (req, res, next) => {
    const { _id, photo, photo2, photo3, height, width, prize, materials, sold } = req.body;
    Sculpture
        .findByIdAndUpdate(_id, { photo, photo2, photo3, height, width, prize, materials, sold })
        .then(() => res.status(201).send("Sculpture edited successfully"))  // Agregamos el envío de la respuesta
        .catch(err => next(err));
};
const deleteSculpture = async (req, res, next) => {
    const { sculpture_id } = req.params;

    Sculpture
        .findByIdAndDelete(sculpture_id)
        .then(() => res.sendStatus(202))
        .catch(err => next(err))
};

module.exports = {
    newSculpture,
    getAllSculptures,
    getOneSculpture,
    getSculpturesPhotos,
    filteredSculptures,
    editSculpture,
    deleteSculpture
}