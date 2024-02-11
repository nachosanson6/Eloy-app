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
                ...pictures.map(item => ({ photo: item.photo, product: item.product, sold: item.sold, _id: item._id })),
                ...sculptures.map(item => ({ photo: item.photo, product: item.product, sold: item.sold, _id: item._id })),
                ...jewelry.map(item => ({ photo: item.photo, product: item.product, sold: item.sold, _id: item._id }))
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

const getOneProduct = async (req, res, next) => {
    const { product_id } = req.params;
    try {
        const productDetails = await getProductDetails(product_id);

        if (!productDetails) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        let carouselElements;

        // Obtener las fotos del producto de Picture, Sculpture o Jewelry según sea necesario
        switch (productDetails.product) {
            case 'Pictures':
                carouselElements = await Picture.find({ sold: false }).select('photo product sold _id');
                break;
            case 'Sculptures':
                carouselElements = await Sculpture.find({ sold: false }).select('photo product sold _id');
                break;
            case 'Jewelry':
                carouselElements = await Jewelry.find({ sold: false }).select('photo product sold _id');
                break;
            default:
                carouselElements = [];
                break;
        }

        res.json({ productDetails, carouselElements });
    } catch (err) {
        next(err);
    }
};

const getProductDetails = async (productId) => {
    let productDetails;

    // Obtener los detalles del producto de Picture, Sculpture o Jewelry según sea necesario
    productDetails = await Picture.findById(productId);
    if (!productDetails) {
        productDetails = await Sculpture.findById(productId);
    }
    if (!productDetails) {
        productDetails = await Jewelry.findById(productId);
    }

    return productDetails;
};


module.exports = {
    getAllPhotos,
    getAllProducts,
    getOneProduct
}