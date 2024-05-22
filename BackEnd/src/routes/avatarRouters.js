const {Router} = require ("express");
const avatarRouter = Router();

avatarRouter.post("/", (req,res)=>{res.send("NIY crear avatar")});
avatarRouter.get("/", (req,res)=>{res.send("NIY trae todos los avatares")});
avatarRouter.get(":id", (req,res)=>{res.send("NIY trae un avatar")});
avatarRouter.put("/:id", (req,res)=>{res.send("NIY modifica un avatar")});
avatarRouter.delete("/elimina/:id", (req,res)=>{res.send("NIY elimina un avatar")});

module.exports = avatarRouter;