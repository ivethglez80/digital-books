const { Router } = require ("express");
const booksRouter = Router();
const {
    createBookHandler,
    getBooksListHandler,
    getBookByIdHandler,
    modificaBookHandler,
    eliminaBookHandler
}= require("./../handlers/booksHandlers")



booksRouter.post("/", createBookHandler    );
booksRouter.get ("/", getBooksListHandler  );
booksRouter.get ("/:id", getBookByIdHandler );
booksRouter.put("/:id", modificaBookHandler );
booksRouter.delete("/:id", eliminaBookHandler );




module.exports = booksRouter;