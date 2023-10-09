const router = require("express").Router();

const {
    newSculpture,
    getAllSculptures,
    getOneSculpture,
} = require("../controllers/scultures.controllers")

router.post("/newSculpture", newSculpture)

router.get("/getAllSculptures", getAllSculptures)

router.get("/getOneSculpture/:sculpture_id", getOneSculpture)

module.exports = router;