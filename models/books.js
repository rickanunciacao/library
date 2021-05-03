// Variable that starts the DB

var mongoose = require('mongoose');


// Variable storing the schema for the books table

var booksSchema = new mongoose.Schema({ 
    title: String,
    author: String,
    publishingyear: Number,
    edition: String,
    editorhouse: String,
    isbn: String,
    price: Number,
    category: String,
    isnew: Boolean
},
{timestamps: true}
);

// creating the user table, using the schema above
module.exports = mongoose.model('Books', booksSchema);