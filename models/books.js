// Variable that starts the DB

var mongoose = require('mongoose');


// Variable storing the schema for the books table

var booksSchema = new mongoose.Schema({ 
    title: String,
    author: String,
    publishingyear: { type: Number, min: 4, max: 4 },
    edition: { type: Number, min: 1, max: 3 },
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