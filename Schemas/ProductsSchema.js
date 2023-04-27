const mongoose = require('mongoose');


const ProductsSchema = new mongoose.Schema({
    name: String,
    imgUrl: String,
    desc: String,
    price: Number,
    category: String,

});

module.exports = {
    Product: mongoose.model("Product", ProductsSchema), 
}