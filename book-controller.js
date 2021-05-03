var Book = require('./models/books')


// Create Single Book

exports.createBook = function(req, res) { 
    var newbook = new Book(req.body);
    newbook.save(function (err, book) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(book); 
});
};

// Read SINGLE Book

exports.getBook = function(req, res) {
  Book.findOne({_id: req.params.id}, function (err, book) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(book);
  }); 
};


// Read ALL Books

exports.getBooks = function(req, res) {
  Book.find({}, function (err, books) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(books);
  }); 
};




// Update SINGLE Book

exports.updateBook = function(req, res) {
  Book.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, book) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(book);
  }); 
};


// Delete SINGLE Book

exports.deleteBook = function(req, res) {
  Book.findByIdAndRemove(req.params.id, function (err, book) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(book);
  }); 
};
