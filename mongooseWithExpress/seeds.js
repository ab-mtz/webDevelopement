//No web involved. We run this file alone, anytime we want new data in our database 

const mongoose = require('mongoose');
const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("Mongo conection open")
    })
    .catch(err => {
        console.log("Mongo conection error")
        console.log(err)
    })