const { DataTypes } = require ("sequelize");
const Personalizado = require ("./Personalizado");

module.exports = (sequelize) =>{
    const Avatar = sequelize.define(
        "Avatar",{
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false
            },
            imagen:{
                type: DataTypes.STRING,
                allowNull: false
            },
            nombre:{
                type: DataTypes.STRING,
                allowNull: false
            },
            descripcion:{
                type: DataTypes.STRING,
                allowNull: false
            }
        },{
            tablename: "Avatar",
            timestamps:false
        }
    );
    Avatar.associate = (models) => {
        Avatar.hasMany(models.Personalizado, {foreingKey: "avatarId"});
    }
    return Avatar;
};

// id, imagen, nombre, descripcion