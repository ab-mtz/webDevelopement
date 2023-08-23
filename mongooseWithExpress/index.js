const express = require('express');
const app = express();
const path = require('path');
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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//An Async callback for a route where we await some moongose operation 
app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', { products })
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findOne({ _id: id }) //findByID(id) gives next error: Crbug/1173575, non-JS module files deprecated
    // console.log(product)
    res.render('products/show' , { product })
})

app.listen(3000, () => {
    console.log("App listening on port 3000")
})
