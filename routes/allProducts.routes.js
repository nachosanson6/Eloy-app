const router = require("express").Router();

const {
    getAllPhotos,
    getAllProducts
} = require("../controllers/allProducts.controllers")

router.get("/getAllPhotos", getAllPhotos)
router.get("/getAllProducts",getAllProducts)

module.exports = router;