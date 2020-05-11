const mongoose = require('mongoose');


const BookSchema = mongoose.Schema({
  title:{type: String , required: true},
  author: {type: String , required: true},
  numberPages:{type: Number , required: false},
  publisher: {type:String, required: false}
});

module.exports = mongoose.model('Book',BookSchema);