const router = require("express").Router();

const {
    getAllPhotos
} = require("../controllers/allProducts.controllers")

router.get("/getAllPhotos", getAllPhotos)

module.exports = router;