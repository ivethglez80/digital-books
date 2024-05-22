const {Router} = require ("express");
const personalizadoRouter = Router();

personalizadoRouter.post("/", (req,res)=>{res.send("NIY crear personalizado")});
personalizadoRouter.get("/", (req,res)=>{res.send("NIY trae todos los personalizados")});
personalizadoRouter.get(":id", (req,res)=>{res.send("NIY trae un personalizado")});
personalizadoRouter.get("/user/:id", (req,res)=>{res.send("NIY traer todas las personalizados de un cliente")})
personalizadoRouter.put("/:id", (req,res)=>{res.send("NIY modifica un personalizado")});
personalizadoRouter.delete("/elimina/:id", (req,res)=>{res.send("NIY elimina un personalizado")});

module.exports = personalizadoRouter;

