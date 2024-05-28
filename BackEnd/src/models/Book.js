const { DataTypes } = require ("sequelize");
//const Orden = require ("./Orden");

module.exports = (sequelize) => {
    const Book = sequelize.define(
        "Book",{
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement:true
            },
            titulo:{
                type: DataTypes.STRING,
                allowNull: false,                
            },
            autor:{
                type: DataTypes.STRING,
                allowNull: true,                
            },
            descripcion:{
                type: DataTypes.STRING,
                allowNull: true,                
            },
            precio:{
                type: DataTypes.STRING,
                allowNull: true,                
            },
            img:{
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull:true
            },
            rating:{
                type: DataTypes.STRING,
                allowNull: true,                
            },
            opiniones:{
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: true,                
            },
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

// id, titulo, autor, descripcion, precio, img, rating, opiniones