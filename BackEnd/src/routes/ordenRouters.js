const {Router} = require ("express");
const ordenRouter = Router();
const {
    crearOrdenHandler,
    ordenListHandler,
    ordenByIdHandler,
    ordenByUserHandler,
    ordenBySlugHandler,
    modificaOrdenHandler,
    eliminaOrdenHandler
} = require ("./../handlers/ordenHandler");

ordenRouter.post("/", crearOrdenHandler);
ordenRouter.get("/", ordenListHandler);
ordenRouter.get("/:id", ordenByIdHandler);
ordenRouter.get("/user/:id", ordenByUserHandler)
ordenRouter.put("/:id", modificaOrdenHandler);
ordenRouter.delete("/elimina/:id", eliminaOrdenHandler);

ordenRouter.get("/parati/:slug", ordenBySlugHandler);

module.exports = ordenRouter;

