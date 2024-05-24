const {
    crearCarrito,
    getListaCarritos,
    getCarritoDetail,
    modificaCarrito,
    eliminaCarrito,
    pagarCarrito
} = require ("./../controllers/carritoController");

// id, userId, ordenId, montoFinal, pagado, fechaCompra

const crearCarritoHandler = async (req,res) => {    
    const {userId, ordenId, montoFinal} = req.body
    try {
        const _new = await crearCarrito(userId, ordenId, montoFinal)
        res.status(201).json(_new)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const getListaCarritosHandler = async (req,res) => {
    try {
        const results = await getListaCarritos();
        res.status(201).json(results)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const getCarritoDetailHandler = async (req,res) => {
    const {id} = req.body
    try {
        const _carritoFound = await getCarritoDetail(id)
        if(_carritoFound){
            res.status(201).json(_carritoFound)
        }else(
            res.status(404).json("carrito no existe")
        )
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const modificaCarritoHandler = async (req,res) => {
    /* NIY verificar que la ordenId exista */
    const {id, userId, ordenId, montoFinal, pagado, fechaCompra} = req.body
    try {
        const modificado = await modificaCarrito(id, userId, ordenId, montoFinal, pagado, fechaCompra)
        if (modificado) {
            res.status(200).json(modificado) 
        }else{
            res.status(404).json("el carrito no existe")
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const eliminaCarritoHandler = async (req,res) => {
    const {id} = req.body;
    try {
        const eliminado = await eliminaCarrito(id)
        if(eliminado){
            res.status(201).json({message:`carrito con id: ${id} ha sido eliminado`})
        }else{
            res.status(404).json({error:"carrito no encontrado"})
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const pagarCarritoHandler = async (req,res) => {
    const {id, expirationDate} = req.body
    try {
        const _pagado = await pagarCarrito(id, expirationDate)
        if(_pagado){
            res.status(201).json(_pagado)
        }else{
            res.status(400).json({error:error,message})
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

module.exports = {
    crearCarritoHandler,
    getListaCarritosHandler,
    getCarritoDetailHandler,
    modificaCarritoHandler,
    eliminaCarritoHandler,
    pagarCarritoHandler
};