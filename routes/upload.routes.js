const uploader = require("../middleware/uploader.middleware");

const router = require("express").Router()

router.post('/image', uploader.single('imageData'), (req, res) => {

    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error cargando el archivo' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
})


module.exports = router


module.exports = router;