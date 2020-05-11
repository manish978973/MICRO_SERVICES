const mongoose = require('mongoose');


const OrderSchema = mongoose.Schema({
  CustomerID:{type: mongoose.SchemaTypes.ObjectId , required: true},
  BookID: {type: mongoose.SchemaTypes.ObjectId , required: true},
  InitialDate:{type: Date , required: true},
  DeliveryDate:{type: Date , required: true}
});

module.exports = mongoose.model('Order',OrderSchema);