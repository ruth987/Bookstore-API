const Book = require('../models/book.model.js');

// const getBooks = async(req, res) => {
//     console.log("getting here")
//     try {
//         const { categories } = req.query;
//         const books = await Book.find(categories ? {categories: {$in: categories.split(",")}} : {});

//         res.status(200).json(books);
//     } catch (error) {
//         res.status(500).json({message : error.message});
//     }
// }
const getBooks = async (req, res) => {
    console.log("getting here")
    try {
      const { categories, name } = req.query; 
  
      let searchQuery = {};
  
      if (categories) {
        searchQuery.categories = { $in: categories.split(",") }; // Filter by categories 
      }
  
      if (name) {
        searchQuery.name = { $regex: name, $options: 'i' }; // Search by title 
      }
  
      const books = await Book.find(searchQuery); 
      res.status(200).json(books); 
    } catch (error) {
      res.status(500).json({ message: error.message }); 
    }
  };

const getBook = async(req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}



// const getBookByCategory = async(req, res) => {
//     try {
//         const { category } = req.params;
//         const book = await Book.find({category: category});
//         res.status(200).json(book);
//     } catch (error) {
//         res.status(500).json({message : error.message});
//     }
// }

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
            return res.status(404).json({message : "Book not found"});
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
            return res.status(404).json({message: "Book not found"});
        }

        res.status(200).json({message : "Book deleted successfully. "});
        
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
    // getBookByCategory
}

