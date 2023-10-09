const router = require("express").Router();

const {
    newJewelry,
    getAllJewelry,
    getOneJewelry,
} = require("../controllers/jewelry.controllers")

router.post("/newJewelry", newJewelry)

router.get("/getAllJewelry", getAllJewelry)

router.get("/getOneJewelry/:jewelry_id", getOneJewelry)

module.exports = router;