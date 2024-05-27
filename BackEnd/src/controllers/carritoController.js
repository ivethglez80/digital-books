// id, userId, ordenId, montoFinal, pagado, fechaCompra
const { MercadoPagoConfig, Preference } = require('mercadopago');
const {Carrito, User, Orden} = require("./../db");
require('dotenv').config();

const crearCarrito = async (userId, ordenId, montoFinal) => {
    try {
        const ordenExiste = await Orden.findOne({ where: { id: ordenId } });
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

const pagarCarrito = async (id, fechaCompra) => {
    const { ACCESS_TOKEN_TEST } = process.env; 
    const client = new MercadoPagoConfig({ accessToken: ACCESS_TOKEN_TEST });

    try {
        const existe = await Carrito.findOne({where:{id:id, pagado:false}})
        if(!existe){
            throw new Error (`el carrito con id: ${id} no existe o ya está pagado`)
        }
        
        const preference = new Preference(client);
        const preferenceData = {
            items: [
                {
                    title: `Orden ${existe.ordenId}`,
                    unit_price: parseFloat(existe.montoFinal),
                    quantity: 1,
                }
            ],
            back_urls: {
                success: 'http://www.your-site.com/success',
                failure: 'http://www.your-site.com/failure',
                pending: 'http://www.your-site.com/pending'
            },
            // notification_url: 'http://<ngrok-id>.ngrok.io/webhook',
            auto_return: 'approved',
        };

        const response = await preference.create({ body: preferenceData }); console.log(response);
        const [_updtd] = await Carrito.update({ pagado:true, fechaCompra}, 
            {where:{id:id}})
        if(_updtd>0){
            const _paid = await Carrito.findOne({where:{id:id}})
            return {
                carrito: _paid,
                init_point: response.init_point,
              };
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