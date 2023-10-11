
module.exports = app => {

    const authRoutes = require("./auth.routes")
    app.use("/api/auth", authRoutes)

    const picturesRoutes = require("./pictures.routes")
    app.use("/api/pictures", picturesRoutes)

    const sculpturesRoutes = require("./sculptures.routes")
    app.use("/api/sculptures", sculpturesRoutes)

    const jewlryRoutes = require("./jewelry.routes")
    app.use("/api/jewelry", jewlryRoutes)

    const uploadRoutes = require("./upload.routes")
    app.use("/upload", uploadRoutes)


}