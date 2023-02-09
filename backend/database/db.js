const mongoose = require('mongoose');

let connect = mongoose.connect('mongodb+srv://sushant:sushant@cluster0.rhqo9af.mongodb.net/blogData?retryWrites=true&w=majority');

module.exports = connect;