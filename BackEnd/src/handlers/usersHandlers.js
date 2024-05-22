const {
    createUser,
    getUserList,
    getUserDetail,
    eliminaUser,
    modificaUser
    } 
    = require("./../controllers/userController");



const createUserHandler = async (req,res) => {
    const {nombre, apellido, imagen, email, telefono, role} = req.body; console.log(nombre, apellido, imagen, email, telefono, role);
    try {
        const newUser = await createUser(nombre, apellido, imagen, email, telefono, role);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

const getUserListHandler = async(req,res) => {
    try {
        const results = await getUserList();
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

const getUserDetailHandler = async (req,res) => {
    const {id} = req.body;
    try {
        const userFound = await getUserDetail(id);
        if (userFound) {
            res.status(200).json(userFound);            
        }else{
            res.status(404).json({error:"user not found"});
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const eliminaUserHandler = async (req,res) => {
    const {id} = req.body;
    try {
        const deletedUser = await eliminaUser(id);
        if (deletedUser){
            res.status(200).json({message:`user with ID ${id}, deleted succsefully`})
        }else{
            res.status(404).json({error:"user not found"});
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const modificaUserHandler = async(req,res) => {
    const {id, nombre, apellido, imagen, email, telefono, role} = req.body;
    try {
        const modified = await modificaUser(id, nombre, apellido, imagen, email, telefono, role);
        if(modified){
            res.status(200).json(modified)
        }else{
            res.status(404).json(`user con id: ${id} no existe`)
        }
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

module.exports = {
    createUserHandler,
    getUserListHandler,
    getUserDetailHandler,
    eliminaUserHandler,
    modificaUserHandler
};

