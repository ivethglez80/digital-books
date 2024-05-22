const createUser = async (nombre, apellido, imagen, email, telefono, role) => {
    try {     
        const existe = User.findOne({where:{email:email}});
        if(existe){
            throw new Error(`ya existe un usuario con el email: ${email}`);
        }
        const nuevo = await User.create({nombre, apellido, imagen, email, telefono, role});
        return nuevo
    } catch (error) {
        throw new Error(error.message);
    }
}