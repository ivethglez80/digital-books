const {
    createAvatar,
    getAvatarList,
    getAvatarById,
    modifyAvatar,
    eliminaAvatar
} = require("./../controllers/avatarController");

const createBookHandler = async (req,res) => {
    const {imagen, nombre, descripcion} = req.body;
    try {
        const newAvatar = await createAvatar(imagen, nombre, descripcion);
        res.status(201).json(newAvatar)
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

const getAvatarListHandler = async (req,res) => {
    try {
        const results  =  await getAvatarList();
        res.status(201).json(results)
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

const getAvatarByIdHandler = async (req,res) => {
    const {id} = req.body;
    try {
        const found = await getAvatarById(id)
        if(found){
            res.status(201).json(found)
        }else{
            res.status(404).json(`avatar con id: ${id} no existe`)
        }   
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

const modifyAvatarHandler = async (req,res) => {
    const {id, imagen, nombre, descripcion} = req.body;
    try {
        const modified = await modifyAvatar(id, imagen, nombre, descripcion);
        if(modified){
            res.status(201).json(modified)
        }else{
            res.status(404).json(`avatar con id: ${id} no existe`)
        }
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

const eliminaAvatarHandler = async (req,res) => {
    const {id} = req.body;
    try {
        const eliminado = await eliminaAvatar(id);
        if(eliminado){
            res.status(201).json(`avatar con id: ${id} ha sido eliminado`)
        }else{
            res.status(404).json(`avatar con id: ${id} no existe`)
        }
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

module.exports = {
    createBookHandler,
    getAvatarListHandler,
    getAvatarByIdHandler,
    modifyAvatarHandler,
    eliminaAvatarHandler
};