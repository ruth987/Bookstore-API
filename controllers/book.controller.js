const Book = require('../models/book.model.js');

const getBooks = async(req, res) => {
    console.log("getting here")
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

const getBook = async(req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

const getBookByCategory = async(req, res) => {
    try {
        const { category } = req.params;
        const book = await Book.find({category: category});
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

const createBook = async(req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(200).json(book);
        
    } catch (error) {
        res.status(500).json({message : error.message});
        
    }
}

const updateBook = async(req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndUpdate(id, req.body);

        if(!book){
            return res.status(404).json({message : "Product not found"});
        }

        const updatedBook = await Book.findById(id);
        res.status(200).json(updatedBook);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

const deleteBook = async(req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);

        if(!book){
            return res.status(404).json({message: "Product not found"});
        }

        res.status(200).json({message : "Product deleted successfully. "});
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
    getBookByCategory
}

