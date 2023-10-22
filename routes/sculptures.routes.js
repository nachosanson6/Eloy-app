const router = require("express").Router();

const {
    newSculpture,
    getAllSculptures,
    getOneSculpture,
    filteredSculptures,
} = require("../controllers/scultures.controllers")

router.post("/newSculpture", newSculpture)

router.get("/getAllSculptures", getAllSculptures)

router.get("/getOneSculpture/:sculpture_id", getOneSculpture)

router.get("/filteredSculptures", filteredSculptures)

module.exports = router;