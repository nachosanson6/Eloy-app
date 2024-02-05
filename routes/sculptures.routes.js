const router = require("express").Router();

const {
    newSculpture,
    getAllSculptures,
    getOneSculpture,
    filteredSculptures,
    editSculpture,
    deleteSculpture,
} = require("../controllers/scultures.controllers")

router.post("/newSculpture", newSculpture)

router.get("/getAllSculptures", getAllSculptures)

router.get("/getOneSculpture/:sculpture_id", getOneSculpture)

router.get("/filteredSculptures", filteredSculptures)

router.post("/editSculpture", editSculpture)

router.post("/deleteSculpture/:sculpture_id", deleteSculpture)


module.exports = router;