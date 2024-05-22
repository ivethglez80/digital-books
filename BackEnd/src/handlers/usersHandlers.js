const createUserHandler = async (req,res) => {
    const {nombre, apellido, imagen, email, telefono, role} = req.body;
    try {
        const newUser = await createUser(nombre, apellido, imagen, email, telefono, role);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};