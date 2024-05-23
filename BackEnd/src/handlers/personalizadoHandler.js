const {
    createP,
    getPlist,
    getPById,
    getPByUser,
    modificaP,
    eliminaP
} = require ("./../controllers/personalizadoController");

const createPHandler = async (req,res) => {
    const {avatarID, userId, nombreMain, nombrePadre, nombreMadre, nombreFam1, nombreFam2, nombreMascota} = req.body;
    try {
        const newP = await createP(avatarID, userId, nombreMain, nombrePadre, nombreMadre, nombreFam1, nombreFam2, nombreMascota);
        res.status(201).json(newP);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

const getPlistHandler = async (req,res) => {
    try {
        const results = await getPlist();
        res.status(201).json(results);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const getPByIdHandler = async (req,res) => {
    const {id} = req.body;
    try {
        const found = await getPById(id);
        if(found){
            res.status(201).json(found)
        }else{
            res.status(404).json({error:"personalizacion no encontrada"})
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const getPByUserHandler = async (req,res) => {
    const {userId} = req.body;
    try {
        const results = await getPByUser(userId);
        if(results){
            res.status(201).json(results)
        }else{
            res.status(201).json({error:`el userId: ${userId} no tiene personalizaciones registradas`})
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const modificaPHandler = async (req,res) => {
    const {id, avatarID, userId, nombreMain, nombrePadre, nombreMadre, nombreFam1, nombreFam2, nombreMascota} = req.body;
    try {
        const mdfd = await modificaP(avatarID, userId, nombreMain, nombrePadre, nombreMadre, nombreFam1, nombreFam2, nombreMascota)
        if(mdfd){
            res.status(201).json(mdfd)
        }else{
            res.status(404).json(`la personalizacion id: ${id} no existe`)
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const eliminaPHandler = async (req,res) => {
    const {id} = req.body;
    try {
        const eliminado = await eliminaP(id);
        if(eliminado){
            res.status(201).json(`el personalizado id: ${id} ha sido eliminado`)
        }else{
            res.status(404).json(`el personalizado id: ${id} no existe`)
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

module.exports = {
    createPHandler,
    getPlistHandler,
    getPByIdHandler,
    getPByUserHandler,
    modificaPHandler,
    eliminaPHandler
};