// Variable that starts the DB

var mongoose = require('mongoose');


// Variable storing the schema for the user table

var userSchema = new mongoose.Schema({ 
    email: { type: String, unique: true, lowercase: true},
    password: String,
    username: String,
    gender: { 
        type: String,
        enum: ['MALE', 'FEMALE']
    },
    phone: Number
},
{timestamps: true}
);

// creating the user table, using the schema above
module.exports = mongoose.model('User', userSchema);