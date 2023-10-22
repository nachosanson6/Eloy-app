const router = require("express").Router();

const {
    newJewelry,
    getAllJewelry,
    getOneJewelry,
    filteredJewelry,
} = require("../controllers/jewelry.controllers")

router.post("/newJewelry", newJewelry)

router.get("/getAllJewelry", getAllJewelry)

router.get("/getOneJewelry/:jewelry_id", getOneJewelry)

router.get("/filteredJewelry", filteredJewelry)

module.exports = router;