// booksRouter.post("/", createBookHandler    );
// booksRouter.get ("/", getBooksListHandler  );
// booksRouter.get ("/:id", getBookById );
// booksRouter.put("/:id", modificaBookHandler );
// booksRouter.delete("/:id", eliminaBookHandler );

// id, nombre, ImgPrevias, Escenarios, textos

const {Book} = require("./../db");

const createBook = async(titulo, autor, descripcion, precio, img, rating, opiniones)=>{
    try {
        const _new = await Book.create({titulo, autor, descripcion, precio, img, rating, opiniones});
        return _new
    } catch (error) {
        throw new Error(error.message);
    }
};

const getBooksList = async () => {
    try {
        const results = await Book.findAll();
        if (results.length > 0){
            return results
        }else{
            return [];
        }
    } catch (error) {
        throw error;
    }
};

const getBookById = async(id) => {
    try {
        const existe = await Book.findOne({where:{id:id}});
        if(existe){
            return existe
        }else{
            return null
        }
    } catch (error) {
        throw error;
    }
}; 

const modificaBook = async (id, titulo, autor, descripcion, precio, img, rating, opiniones) => {
    try {
        const modificado = await Book.update({titulo, autor, descripcion, precio, img, rating, opiniones}, {where:{id:id}});
        if(modificado>0){
            const mdfd = await Book.findOne({where:{id:id}});
            return mdfd
        }else{
            return null
        }
    } catch (error) {
        throw error
    }
};

const eliminaBook = async (id) => {
    try {
        const deleted = await Book.destroy({where:{id:id}});
        if(deleted>0){
            return true
        }else{
            return null
        }
    } catch (error) {
        throw error
    }
};

module.exports = {
    createBook,
    getBooksList,
    getBookById,
    modificaBook,
    eliminaBook
};