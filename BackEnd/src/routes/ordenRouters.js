const {Router} = require ("express");
const ordenRouter = Router();

ordenRouter.post("/", (req,res)=>{res.send("NIY crear orden")});
ordenRouter.get("/", (req,res)=>{res.send("NIY trae todos los ordenes")});
ordenRouter.get(":id", (req,res)=>{res.send("NIY trae un orden")});
ordenRouter.get("/user/:id", (req,res)=>{res.send("NIY traer todas las ordenes de un cliente")})
ordenRouter.put("/:id", (req,res)=>{res.send("NIY modifica un orden")});
ordenRouter.delete("/elimina/:id", (req,res)=>{res.send("NIY elimina un orden")});

module.exports = ordenRouter;

