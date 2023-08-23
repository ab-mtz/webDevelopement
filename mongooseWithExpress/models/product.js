//No need to conect to the database cause is required on the other file (index.js)
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['fruit', 'vegetables', 'dairy']
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;