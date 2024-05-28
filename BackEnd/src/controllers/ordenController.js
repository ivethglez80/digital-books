// id, PersonalizadoId, bookId, showLink, expirationDate, active

const {Orden, Personalizado, Book} = require ("./../db");

const crearOrden = async (personalizadoId, bookId, userId) => {
    const urlBase = "http://localhost:3001/";
    try {
        const p = await Personalizado.findOne({where:{id:personalizadoId}});         
        const b = await Book.findOne({where:{id:bookId}});         
        const sl = `${p.nombreMain}-${b.titulo}-${p.P_id}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const lnk = `${urlBase}${sl}`
        const _new = await Orden.create({personalizadoId, bookId, userId, slug: sl, showLink: lnk})
        return _new
    } catch (error) {
        throw error
    }
}; 

const ordenList = async () => {
    try {
        const results = await Orden.findAll();
        if(results.length>0){
            return results
        }else{
            return []
        }
    } catch (error) {
        throw error
    }
};

const ordenById = async (id) => {
    try {
        const existe = await Orden.findOne({where:{id:id}})
        if(existe){
            return existe
        }else{
            return null
        }
    } catch (error) {
        throw error
    }
};

const ordenByUser = async (userId) => {
    try {
        const results = await Orden.findAll({where:{userId:userId}})
        if(results){
            return results
        }else{
            return null
        }
    } catch (error) {
        throw error
    }
};

const ordenBySlug = async(slug) => {
    try {
        const existe = await Orden.findOne({where:{slug:slug}});
        if(existe){
            return existe
        }else{
            return null
        }
    } catch (error) {
        throw error;
    }
};


const modificaOrden = async (id, PersonalizadoId, bookId, showLink, expirationDate, active, userId) => {
    try {
        const updated = await Orden.update({PersonalizadoId, bookId, showLink, expirationDate, active, userId},
            {where:{id:id}}
        )
        if(updated>0){
            const updtd = await Orden.findOne({where:{id:id}}) 
            return updtd
        }else{
            return null
        }
    } catch (error) {
        throw error
    }
};

const eliminaOrden = async (id) => {
    try {
        const eliminado = await Orden.destroy({where:{id:id}})
        if(eliminado>0){
            return true
        }else{
            return null
        }
    } catch (error) {
        throw error
    }
};

module.exports = {
    crearOrden,
    ordenList,
    ordenById,
    ordenByUser,
    ordenBySlug,
    modificaOrden,
    eliminaOrden
}

