const {Router} = require ("express");
const avatarRouter = Router();
const {
    createBookHandler,
    getAvatarListHandler,
    getAvatarByIdHandler,
    modifyAvatarHandler,
    eliminaAvatarHandler
} = require ("./../handlers/avatarHandler");

avatarRouter.post("/", createBookHandler);
avatarRouter.get("/", getAvatarListHandler);
avatarRouter.get("/:id", getAvatarByIdHandler);
avatarRouter.put("/:id", modifyAvatarHandler);
avatarRouter.delete("/elimina/:id", eliminaAvatarHandler);

module.exports = avatarRouter;