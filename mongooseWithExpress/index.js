const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

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
app.use(express.urlencoded({extended: true}))  //when we want request info of the body to post
app.use(methodOverride('_method'))

//Variable definitions
const categories = ['fruit', 'vegetables', 'dairy']


//An Async callback for a route where we await some moongose operation 
app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', { products })
})

app.get('/products/new', (req,res) => {
    res.render('products/new', { categories })
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    const product = await newProduct.save();
    console.log(newProduct)
    res.redirect(`products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findOne({ _id: id }) //findByID(id) gives next error: Crbug/1173575, non-JS module files deprecated
    // console.log(product)
    res.render('products/show' , { product })
})

app.get('/products/:id/edit', async (req,res) => {
    const { id } = req.params;
    const product = await Product.findOne({ _id: id });
    res.render('products/edit', { product, categories })
})

//WE have to decide between put or patch request. Put: overwrite all; Patch: change a portion of the document
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidatos: true, new: true })
    console.log(req.body);
    res.redirect(`/products/${product._id}`);
})

app.listen(3000, () => {
    console.log("App listening on port 3000")
})
