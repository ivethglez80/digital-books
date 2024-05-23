const { DataTypes } = require ("sequelize");
const Carrito = require ("./Carrito");

module.exports = (sequelize) => {
    const Orden = sequelize.define(
        "Orden",{
            id:{
                type:DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false
            },
            personalizadoId:{
                type: DataTypes.UUID,
                allowNull: false
            },
            bookId:{
                type: DataTypes.UUID,
                allowNull: false
            },
            showLink:{
                type:DataTypes.STRING,
                allowNull:true,
                defaultValue:""
            },            
            expirationDate:{
                type: DataTypes.DATE,
                allowNull:true                
            },
            active:{
                type:DataTypes.BOOLEAN,
                allowNull:false,
                defaultValue:false
            }
        },{
            tablename: "orden",
            timestamps: false
        }
    );
    Orden.associate = (models) =>{
        Orden.belongsTo(models.Carrito, {foreignKey: "ordenId"});
    }
    return Orden;
};

// id, personalizadoId, bookId, showLink, expirationDate, active