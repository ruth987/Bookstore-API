const express = require('express');
const Book = require('../models/book.model.js')
const router = express.Router();

const { getBooks, getBook, createBook, updateBook, deleteBook, getBookByCategory} = require('../controllers/book.controller.js');


router.get('/', getBooks);

router.get('/:id', getBook);

router.get('/category/:category', getBookByCategory);

router.post('/', createBook);

router.put('/:id', updateBook);

router.delete('/:id', deleteBook);

module.exports = router;

