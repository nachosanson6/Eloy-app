const router = require("express").Router();

const {
    newSculpture,
    getAllSculptures,
    getOneSculpture,
    filteredSculptures,
    getSculpturesPhotos,
    editSculpture,
    deleteSculpture,
} = require("../controllers/scultures.controllers")

router.post("/newSculpture", newSculpture)

router.get("/getAllSculptures", getAllSculptures)

router.get("/getOneSculpture/:sculpture_id", getOneSculpture)

router.get("/filteredSculptures", filteredSculptures)

router.get("/getSculpturesPhotos", getSculpturesPhotos)

router.post("/editSculpture", editSculpture)

router.post("/deleteSculpture/:sculpture_id", deleteSculpture)


module.exports = router;