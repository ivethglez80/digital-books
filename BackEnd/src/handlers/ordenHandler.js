// id, personalizadoId, bookId, showLink, expirationDate, active

const {
    crearOrden,
    ordenList,
    ordenById,
    ordenByUser,
    ordenBySlug,
    modificaOrden,
    eliminaOrden
} = require ("./../controllers/ordenController");

const crearOrdenHandler = async (req,res) => {
    const { personalizadoId, bookId, userId } = req.body;
    try {
        const newOrden = await crearOrden(personalizadoId, bookId, userId);
        res.status(201).json(newOrden);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

const ordenListHandler = async (req,res) => {
    try {
        const results = await ordenList();
        res.status(201).json(results)
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

const ordenByIdHandler = async (req,res) => {
    const {id} = req.body;
    try {
        const _found = await ordenById(id);
        if (_found) {
            res.status(200).json(_found);            
        }else{
            res.status(404).json({error:"orden not found"});
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const ordenByUserHandler = async (req,res) => {
    const {userId} = req.body;
    try {
        const _found = await ordenByUser(userId);
        if (_found) {
            res.status(200).json(_found);            
        }else{
            res.status(404).json({error:`el usuario id: ${userId} no tiene ordenes registradas`});
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const ordenBySlugHandler = async(req,res) => {
    const {slug} = req.params;
    try {
        const ordenSlug = await ordenBySlug(slug)
        if(ordenSlug){
            res.status(201).json(ordenSlug)
        }else{
            res.status(404).json(`libro no encontrado`)
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const modificaOrdenHandler = async (req,res) => {
    const {id, personalizadoId, bookId, showLink, expirationDate, active, userId} = req.body;
    try {
        const modified = await modificaOrden(id, personalizadoId, bookId, showLink, expirationDate, active, userId);
        if(modified){
            res.status(201).json(modified)
        }else{
            res.status(404).json(`la orden id: ${id} no existe`)
        }
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

const eliminaOrdenHandler = async (req,res) => {
    const {id} = req.body
    try {
        const eliminado = await eliminaOrden(id);
        if(eliminado){
            res.status(201).json(`la orden id: ${id} ha sido eliminada`)
        }else{
            res.status(404).json(`la orden id: ${id} no existe`)
        }
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

module.exports = {
    crearOrdenHandler,
    ordenListHandler,
    ordenByIdHandler,
    ordenByUserHandler,
    ordenBySlugHandler,
    modificaOrdenHandler,
    eliminaOrdenHandler
};