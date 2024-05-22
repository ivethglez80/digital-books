const {DataTypes} = require ("sequelize");


module.exports = (sequelize) => {
    const User = sequelize.define(
        "User",{
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false
            },
            nombre:{
                type: DataTypes.STRING,
                allowNull: false
            },
            apellido:{
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: ""
            },
            imagen:{
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: ""
            },
            email:{
                type: DataTypes.STRING,
                allowNull: false,
                unique:true,                
            },
            telefono:{
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: ""
            },
            role:{
                type: DataTypes.ENUM("admin", "cliente"),
                defaultValue: "cliente"
            }
        },
        {
            tablename: "User",
            timestamps: false,
        }
    );
    User.associate = (models) => {
        User.hasMany(models.Carrito, {foreignKey:"userId"})
    }
    return User;
};



// id, *nombre, apellido, imagen, *email, telefono, role("admin", "cliente")