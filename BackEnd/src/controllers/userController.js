// usersRouter.post("/", (req,res)=>{    res.send("NIY crear nuevo usuario")   }  );
// usersRouter.get("/", (req,res)=>{    res.send("NIY trae todos los usuarios")   }  );
// usersRouter.get("/:id", (req,res)=>{    res.send("NIY trae info de un solo usuario")   }  );
// usersRouter.put("/:id", (req,res)=>{    res.send("NIY modifica un usuario")   });
// usersRouter.delete("/:id", (req,res)=>{    res.send("NIY elimina un usuario")   }  );

// id, *nombre, apellido, imagen, *email, telefono, role("admin", "cliente")


const {User} = require("./../db");




const createUser = async(nombre, apellido, imagen, email, telefono, role)=>{ 
    try {
        const existe = await User.findOne({where:{email:email}});
        if(existe){
            throw new Error(`ya existe usuario con email ${email}`);
        }
        const _new = await User.create({nombre, apellido, imagen, email, telefono, role});
        return _new;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getUserList = async () => {
    try {
        const results = await User.findAll();
        if (results.length > 0) {
            return results;
        } else {
            return []; 
        }
    } catch (error) {
        throw error; 
    }
};

const getUserDetail = async(id) => {
    try {
        const existe = await User.findOne({where:{id:id}});
        if(existe){
            return existe
        }else{
            return null;
        }
    } catch (error) {
        throw error;
    }
};

const eliminaUser = async(id) => {
    try {
        const deleted = await User.destroy({where: { id: id }});
        if (deleted > 0) {
            return true;
        } else {
            return null;
        }
    } catch (error) {
        throw error;
    }
};

const modificaUser = async(id, nombre, apellido, imagen, email, telefono, role) =>{
    try {
        const modificado  = await User.update({
            nombre, apellido, imagen, email, telefono, role
        },{
            where:{id:id}
        });
        if(modificado>0){
            const mdfd = User.findOne({where:{id:id}});
            return mdfd;
        }else{
            return null;
        }
    } catch (error) {
        throw error;
}
};



module.exports = {
    createUser,
    getUserList,
    getUserDetail,
    eliminaUser,
    modificaUser
};