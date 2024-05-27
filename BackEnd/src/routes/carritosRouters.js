const { Router } = require ("express");
const carritoRouter = Router();
const {
    crearCarritoHandler,
    getListaCarritosHandler,
    getCarritoDetailHandler,
    modificaCarritoHandler,
    eliminaCarritoHandler,
    pagarCarritoHandler
} = require ("./../handlers/carritoHandlers");



carritoRouter.post("/", crearCarritoHandler );
carritoRouter.get("/", getListaCarritosHandler );
carritoRouter.get("/:id", getCarritoDetailHandler );
carritoRouter.put("/:id", modificaCarritoHandler );
carritoRouter.delete("/:id", eliminaCarritoHandler );
carritoRouter.post("/pagar", pagarCarritoHandler );



module.exports = carritoRouter;