import express from 'express';
import { Book } from './book.model.js';
import { deleteBook, getAllBooks, getBook, postBook, updateBook } from './book.controller.js';


const router = express.Router();

router.post("/create-book", postBook);
router.get("/", getAllBooks);
router.get("/:id", getBook);
router.put("/edit/:id", updateBook);
router.delete("/delete/:id", deleteBook);

export default router;