const router = require("express").Router();

const {
    newPicture,
    getAllPictures,
    getOnePicture,
} = require("../controllers/pictures.controllers")

router.post("/newPicture", newPicture)

router.get("/getAllPictures", getAllPictures)

router.get("/getOnePicture/:picture_id", getOnePicture)

module.exports = router;