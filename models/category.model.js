const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema(
    {
        name: {
            type : String,
            required : [true, "please enter category name"],
            unique: true,
        },
        description: {
            type: String,
        }
    },
    {
        timestamps : true,
    }
)

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;

