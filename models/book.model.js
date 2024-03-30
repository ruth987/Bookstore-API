const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
    {
        name: {
            type : String,
            required : [true, "please enter book name"],
        }, 

        quantity: {
            type: Number,
            required: true,
            default: 0,
        }, 

        price: {
            type: Number,
            required: true,
            default: 0,

        }, 

        image: {
            type: String,
            required: false,
            
        },
        categories: [{type: mongoose.Schema.Types.ObjectId, ref: "Category"}]

    },
    {
        timestamps : true,
    }
)

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;