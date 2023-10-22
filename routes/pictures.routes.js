const router = require("express").Router();

const {
    newPicture,
    getAllPictures,
    getOnePicture,
    filteredPictures
} = require("../controllers/pictures.controllers")

router.post("/newPicture", newPicture)

router.get("/getAllPictures", getAllPictures)

router.get("/getOnePicture/:picture_id", getOnePicture)

router.get("/filteredPictures", filteredPictures)

module.exports = router;