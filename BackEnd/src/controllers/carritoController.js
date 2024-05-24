// id, userId, ordenId, montoFinal, pagado, fechaCompra

const {Carrito, User, Orden} = require("./../db");

const crearCarrito = async (userId, ordenId, montoFinal) => {
    try {
        const ordenExiste = await Carrito.findOne({where:{id:ordenId}})
        if(!ordenExiste){
            throw new Error (`no existe una orden con el id: ${ordenId}`)
        }
        const _new = await Carrito.create({userId, ordenId, montoFinal})
        return _new
    } catch (error) {
        throw new Error(error.message);
    }
};

const getListaCarritos = async () => {
    try {
        const results = await Carrito.findAll();
        return results ? results : [];
    } catch (error) {
        throw new Error(error.message);
    }
};

const getCarritoDetail = async (id) => {
    try {
        const _found = await Carrito.findOne({where:{id:id}})
        return _found ? _found : null;
    } catch (error) {
        throw new Error(error.message);
    }
};

const modificaCarrito = async (id, userId, ordenId, montoFinal, pagado, fechaCompra) => {
    try {
        const validations = []
        if(userId){
            validations.push( await User.findOne({where:{id:userId}}).then(existe=> {
                if(!existe){
                    throw new Error (`el usuario con id: ${userId} no existe`)
                }})
            )
        }
        if(ordenId){
            validations.push( await Orden.findOne({where:{id:ordenId}}).then(existe=> {
                if(!existe){
                    throw new Error (`la orden con id: ${ordenId} no existe`)
                }})
            )
        }
        await Promise.all(validations);

        const [modified] =  await Carrito.update({
            userId, ordenId, montoFinal, pagado, fechaCompra
        }, {where:{id:id}})
        
        if(modified>0){
            const mdfd = await Carrito.findOne({where:{id:id}})
            return mdfd
        }else{
            throw new Error("No se pudo modificar el carrito o no existe.");
        }        
    } catch (error) {
        throw new Error(error.message);
    }
};

const eliminaCarrito = async (id) => {
    try {
        const eliminado = await Carrito.destroy({where:{id:id}})
        return eliminado > 0 ? true : null;
    } catch (error) {
        throw new Error(error.message);
    }
};

const pagarCarrito = async (id, userId, ordenId, montoFinal, pagado, fechaCompra) => {
    try {
        const existe = await Carrito.findOne({where:{id:id, pagado:false}})
        if(!existe){
            throw new Error (`el carrito con id: ${id} no existe o ya está pagado`)
        }
        const [_updtd] = await Carrito.update({userId, ordenId, montoFinal, pagado:true, fechaCompra}, 
            {where:{id:id}})
        if(_updtd>0){
            const _paid = await Carrito.findOne({where:{id:id}})
            return _paid
        }else{
            throw new Error("No se pudo modificar el producto o no existe.");
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    crearCarrito,
    getListaCarritos,
    getCarritoDetail,
    modificaCarrito,
    eliminaCarrito,
    pagarCarrito
};