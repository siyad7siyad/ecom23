const mongoose = require('mongoose');

const Product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image:[{
    type:String,
    required:true
}],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  brand:{
    type:String,
    required:true
},
  price:{
    type:Number,
    required:true
  },
  discount_price:{
    type:Number,
    required:true
  },
  sizes: [
    {
      size: String,
      stock: Number,
    },
  ],
  productColor:{
    type: String,
    required: true,
  },
 
  gender:{
    type: String,
    required: true,
  },
  productAddDate: {
    type: Date,
    default: Date.now, // Store the current date and time when the user is created
  },
  is_listed:{
    type:Boolean,
    default:true
}
 

  
});

module.exports = mongoose.model('Product', Product);

