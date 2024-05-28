const { DataTypes } = require("sequelize");
//const Orden = require("./Orden");

module.exports = (sequelize) => {
    const Personalizado = sequelize.define(
        "Personalizado",{
            id:{
                type:DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false
            },
            P_id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false
            },
            userId:{
                type: DataTypes.UUID,
                allowNull: true
            },
            avatarID:{
                type: DataTypes.UUID,
                allowNull: true
            },
            nombreMain:{
                type: DataTypes.STRING,
                allowNull: true
            },
            nombrePadre:{
                type: DataTypes.STRING,
                allowNull: true
            },
            nombreMadre:{
                type: DataTypes.STRING,
                allowNull: true
            },
            nombreFam1:{
                type: DataTypes.STRING,
                allowNull: true
            },
            nombreFam2:{
                type: DataTypes.STRING,
                allowNull: true
            },
            nombreMascota:{
                type: DataTypes.STRING,
                allowNull: true
            },

        },
        {
            tablename:"Personalizado",
            timestamps:false
        }
    );
    Personalizado.associate = (models) => {
        Personalizado.hasMany(models.Orden, {foreignKey:"personalizadoId"});
        Personalizado.belongsTo(models.User, {foreignKey: "userId"});
    }
    return Personalizado;
}

// id, userId, avatarID, nombreMain, nombrePadre, nombreMadre, nombreFam1, nombreFam2, nombreMascota