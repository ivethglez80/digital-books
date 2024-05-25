const {Router} = require ("express");
const personalizadoRouter = Router();
const {
    createPHandler,
    getPlistHandler,
    getPByIdHandler,
    getPByUserHandler,
    modificaPHandler,
    eliminaPHandler
} = require ("./../handlers/personalizadoHandler");

personalizadoRouter.post("/", createPHandler);
personalizadoRouter.get("/", getPlistHandler);
personalizadoRouter.get("/:id", getPByIdHandler);
personalizadoRouter.get("/user/:id", getPByUserHandler)
personalizadoRouter.put("/:id", modificaPHandler);
personalizadoRouter.delete("/elimina/:id", eliminaPHandler);

module.exports = personalizadoRouter;

