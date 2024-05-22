const { DataTypes } = require ("sequelize");
const User = require("./User");

module.exports = (sequelize) => {
    const Carrito = sequelize.define(
        "Carrito",{
            id:{
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            userId:{
                type: DataTypes.UUID,
                allowNull: false,                
            },
            ordenId:{
                type: DataTypes.ARRAY(DataTypes.UUID),
                allowNull:false
            },                 
            montoFinal:{
                type: DataTypes.DECIMAL(10,2),
                allowNull: false
            },
            pagado:{
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            fechaCompra:{
                type: DataTypes.DATE,
                allowNull: true                
            },
        },
        {
            tablename:"libros",
            timestamps: false
        }
    );
    Carrito.associate = (models) => {
        Carrito.belongsTo(models.User, {foreignKey:"userId"});
    }
    return Carrito;
};