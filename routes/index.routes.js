
module.exports = app => {

    const authRoutes = require("./auth.routes")
    app.use("/auth", authRoutes)

    const picturesRoutes = require("./pictures.routes")
    app.use("/api/pictures", picturesRoutes)

    const sculpturesRoutes = require("./sculptures.routes")
    app.use("/api/sculptures", sculpturesRoutes)

    const jewlryRoutes = require("./jewelry.routes")
    app.use("/api/jewelry", jewlryRoutes)

    const allProductsRoutes = require("./allProducts.routes")
    app.use("/api/allProducts", allProductsRoutes)

    const uploadRoutes = require("./upload.routes")
    app.use("/upload", uploadRoutes)


}