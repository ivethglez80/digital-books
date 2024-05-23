// id, imagen, nombre, descripcion

const { Avatar } = require("./../db");

const createAvatar = async(imagen, nombre, descripcion)=>{ 
    try {        
        const _new = await Avatar.create({imagen, nombre, descripcion});
        return _new;
    } catch (error) {
        throw error;
    }
};

const getAvatarList = async () => {
    try {
        const results = await Avatar.findAll();
        return results
    } catch (error) {
        throw error;
    }
};

const getAvatarById = async(id) => {
    try {
        const existe = await Avatar.findOne({where:{id:id}});
        if(existe){
            return existe
        }else{
            return null;
        } 
    } catch (error) {
        throw error
    }
};

const modifyAvatar = async(id, imagen, nombre, descripcion) => {
    try {
        const modified = await Avatar.update({imagen, nombre, descripcion}, {where:{id:id}});
        if(modified>0){
            const mdfd = Avatar.findOne({where:{id:id}});
            return mdfd
        }else{
            return null
        }
    } catch (error) {
        throw error
    }
};

const eliminaAvatar = async (id) => {
    try {
        const eliminado  =  await Avatar.destroy({where:{id:id}});
        if (eliminado>0){
            return true
        }else{
            return null
        }
    } catch (error) {
        throw error
    }
};

module.exports = {
    createAvatar,
    getAvatarList,
    getAvatarById,
    modifyAvatar,
    eliminaAvatar
}