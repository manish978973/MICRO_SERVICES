const mongoose = require('mongoose');


const CustomerSchema = mongoose.Schema({
  name:{type: String , required: true},
  age: {type: Number , required: true},
  address:{type: String , required: true}
});

module.exports = mongoose.model('Customer',CustomerSchema);