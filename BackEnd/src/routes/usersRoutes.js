const { Router } = require ("express");
const usersRouter = Router();

usersRouter.post("/", (req,res)=>{    res.send("NIY crear nuevo usuario")   }  );
usersRouter.get("/", (req,res)=>{    res.send("NIY trae todos los usuarios")   }  );
usersRouter.get("/:id", (req,res)=>{    res.send("NIY trae info de un solo usuario")   }  );
usersRouter.put("/:id", (req,res)=>{    res.send("NIY modifica un usuario")   });
usersRouter.delete("/:id", (req,res)=>{    res.send("NIY elimina un usuario")   }  );



module.exports = usersRouter;