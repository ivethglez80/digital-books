const { DataTypes } = require ("sequelize");
//const Orden = require ("./Orden");

module.exports = (sequelize) => {
    const Book = sequelize.define(
        "Book",{
            id:{
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            nombre:{
                type: DataTypes.STRING,
                allowNull: false,                
            },
            ImgPrevias:{
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull:true
            },
            Escenarios:{
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: true,
                defaultValue: []
            },
            textos:{
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: true,
                defaultValue:[]
            }
        },
        {
            tablename:"books",
            timestamps: false
        }
    );
    Book.associate = (models) => {
        Book.hasMany(models.Orden, {foreignKey: "bookId"})
    }
    return Book;
};