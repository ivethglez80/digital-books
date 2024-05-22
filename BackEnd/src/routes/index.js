const {Router} = require("express");
const usersRouter = require("./usersRoutes");
const booksRouter = require("./booksRouters");
const carritoRouter = require("./carritosRouters");
const avatarRouter = require("./avatarRouters");
const ordenRouter = require ("./ordenRouters");



const mainRouter = Router();

mainRouter.use("/user", usersRouter);
mainRouter.use("/libros", booksRouter);
mainRouter.use("/carrito", carritoRouter);
mainRouter.use("/avatar", avatarRouter);
mainRouter.use("/orden", ordenRouter);

module.exports = mainRouter;