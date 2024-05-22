const { Router } = require ("express");
const booksRouter = Router();



booksRouter.post("/", (req,res)=>{      res.send("NIY crear un libro")   }    );
booksRouter.get("/", (req,res)=>{      res.send(" NIY trae todos los libros")   }    );
booksRouter.get("/:id", (req,res)=>{      res.send(" NIY trae un solo libro")   }    );
booksRouter.put("/:id", (req,res)=>{      res.send(" NIY modifica un libro")   }    );
booksRouter.delete("/:id", (req,res)=>{      res.send(" NIY elimina un libros")   }    );



module.exports = booksRouter;