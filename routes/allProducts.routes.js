const router = require("express").Router();

const {
    getAllPhotos,
    getAllProducts,
    getOneProduct
} = require("../controllers/allProducts.controllers")

router.get("/getAllPhotos", getAllPhotos)
router.get("/getAllProducts", getAllProducts)
router.get("/getOneProduct/:product_id", getOneProduct)

module.exports = router;