const { Router } = require ("express");
const carritoRouter = Router();



carritoRouter.post("/", (req,res)=>{   res.send("NIY crear nuevo carrito")   }    );
carritoRouter.get("/", (req,res)=>{   res.send("NIY trae todos los carritos")   }    );
carritoRouter.get("/:id", (req,res)=>{   res.send("NIY trae un solo carrito")   }    );
carritoRouter.put("/:id", (req,res)=>{   res.send("NIY modificar un carrito")   }    );
carritoRouter.delete("/:id", (req,res)=>{   res.send("NIY eliminar un carrito")   }    );
carritoRouter.put("/pagar", (req,res)=>{   res.send("NIY pagar carrito")   }    );



module.exports = carritoRouter;