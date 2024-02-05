const router = require("express").Router();

const {
    newJewelry,
    getAllJewelry,
    getOneJewelry,
    filteredJewelry,
    editJewelry,
    deleteJewelry,
} = require("../controllers/jewelry.controllers")

router.post("/newJewelry", newJewelry)

router.get("/getAllJewelry", getAllJewelry)

router.get("/getOneJewelry/:jewelry_id", getOneJewelry)

router.get("/filteredJewelry", filteredJewelry)

router.post("/editJewelry", editJewelry)

router.post("/deleteJewelry/:jewelry_id", deleteJewelry)


module.exports = router;