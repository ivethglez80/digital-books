const { Router } = require ("express");
const usersRouter = Router();
const {
    createUserHandler,
    getUserListHandler,
    getUserDetailHandler,
    eliminaUserHandler,
    modificaUserHandler
} = require("./../handlers/usersHandlers")


usersRouter.post("/", createUserHandler);
usersRouter.get("/", getUserListHandler );
usersRouter.get("/:id", getUserDetailHandler  );
usersRouter.delete("/:id", eliminaUserHandler);
usersRouter.put("/:id", modificaUserHandler  );



module.exports = usersRouter;