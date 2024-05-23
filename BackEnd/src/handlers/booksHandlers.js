
const {
    createBook,
    getBooksList,
    getBookById,
    modificaBook,
    eliminaBook
}
= require("./../controllers/bookController");


const createBookHandler = async(req,res) => {
    const {nombre, ImgPrevias, Escenarios, textos} = req.body;
    try {
        const newBook = await createBook(nombre, ImgPrevias, Escenarios, textos);
        res.status(200).json(newBook);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const getBooksListHandler = async(req,res) => {
    try {
        const results = await getBooksList();
        res.status(200).json(results)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const getBookByIdHandler = async(req,res) => {
    const {id} = req.body;
    try {
        const bookFound = await getBookById(id);
        if(bookFound){
            res.status(200).json(bookFound)
        }else{
            res.status(404).json(`libro con id: ${id} no existe`)
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const modificaBookHandler = async (req,res) => {
    const {id, nombre, ImgPrevias, Escenarios, textos} = req.body;
    try {
        const modified = await modificaBook(id, nombre, ImgPrevias, Escenarios, textos);
        if(modified){
            res.status(200).json(modified)
        }else{
            res.status(404).json(`libro con id: ${id} no existe`)
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const eliminaBookHandler = async(req,res) => {
    const {id} = req.body;
    try {
        const deletedBook = await eliminaBook(id);
        if (deletedBook){
            res.status(200).json(`el libro con id: ${id} ha sido eliminado`)
        }else{
            res.status(404).json(`libro con id: ${id} no existe`)
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};


module.exports = {
    createBookHandler,
    getBooksListHandler,
    getBookByIdHandler,
    modificaBookHandler,
    eliminaBookHandler
}