// personalizadoRouter.post("/", (req,res)=>{res.send("NIY crear personalizado")});
// personalizadoRouter.get("/", (req,res)=>{res.send("NIY trae todos los personalizados")});
// personalizadoRouter.get(":id", (req,res)=>{res.send("NIY trae un personalizado")});
// personalizadoRouter.get("/user/:id", (req,res)=>{res.send("NIY traer todas las personalizados de un cliente")})
// personalizadoRouter.put("/:id", (req,res)=>{res.send("NIY modifica un personalizado")});
// personalizadoRouter.delete("/elimina/:id", (req,res)=>{res.send("NIY elimina un personalizado")});

// id, avatarID, nombreMain, nombrePadre, nombreMadre, nombreFam1, nombreFam2, nombreMascota

const {Avatar} = require ("./../db");
const {Personalizado} = require ("./../db");


const createP = async (avatarID, userId, nombreMain, nombrePadre, nombreMadre, nombreFam1, nombreFam2, nombreMascota) =>{
    const avatarExiste = await Avatar.foundOne({where:{id:avatarID}});
    if(!avatarExiste){
        throw new Error(`el avatar id: ${avatarID} no existe`)
    }
    try {
        const newP = await Personalizado.create({avatarID, userId, nombreMain, nombrePadre, nombreMadre, nombreFam1, nombreFam2, nombreMascota});
        return newP
    } catch (error) {
        throw new Error (error.message)
    }
};

const getPlist = async () => {
    try {
        const results = await Personalizado.findAll();
        if (results.length>0){
            return results
        }else{
            return []
        }
    } catch (error) {
        throw error
    }
};

const getPById = async (id) => {
    try {
        const _found = await Personalizado.findOne({where:{id:id}})
        if(_found){
            return _found
        }else{
            return null
        }
    } catch (error) {
        throw error
    }
};

const getPByUser = async (userId) => {
    try {
        const _found = await Personalizado.findAll({where:{userId:userId}})
        if(_found){
            return _found
        }else{
            return null
        }
    } catch (error) {
        throw error
    }
};

const modificaP = async (id, avatarID, userId, nombreMain, nombrePadre, nombreMadre, nombreFam1, nombreFam2, nombreMascota) => {
    const avatarExiste = await Avatar.foundOne({where:{id:id}});
    if(!avatarExiste){
        throw new Error(`el avatar id: ${avatarID} no existe`)
    }
    try {
        const updatedP = await Personalizado.update({avatarID, userId, nombreMain, nombrePadre, nombreMadre, nombreFam1, nombreFam2, nombreMascota}, 
            {where:{id:id}}
        );
        if (updatedP>0){
            const mdfd = await Personalizado.findOne({where:{id:id}})
            return mdfd
        }else{
            return null
        }
    } catch (error) {
        throw error
    }
};

const eliminaP = async (id) => {
    try {
        const eliminado  =  await Personalizado.destroy({where:{id:id}})
        if (eliminado > 0){
            return true
        }else{
            return null
        }
    } catch (error) {
        throw error
    }
};

module.exports = {
    createP,
    getPlist,
    getPById,
    getPByUser,
    modificaP,
    eliminaP
};