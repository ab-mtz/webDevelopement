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

    // const p = new Product ({
    //     name: 'Grape fruit',
    //     price: 1,
    //     category:'fruit'
    // })

    // p.save().then(p => {
    //     console.log(p)
    // })
    // .catch(e => {
    //     console.log(e)
    // })

    const seedProducts = [
        {
            name: "Apple",
            price: 0.5,
            category: "fruit"
        },
        {
            name: "Carrot",
            price: 0.3,
            category: "vegetable"
        },
        {
            name: "Banana",
            price: 0.25,
            category: "fruit"
        },
        {
            name: "Spinach",
            price: 0.8,
            category: "vegetable"
        },
        {
            name: "Orange",
            price: 0.6,
            category: "fruit"
        },
        {
            name: "Tomato",
            price: 0.4,
            category: "vegetable"
        },
        {
            name: "Strawberry",
            price: 0.1,
            category: "fruit"
        },
        {
            name: "Broccoli",
            price: 0.7,
            category: "vegetable"
        },
        {
            name: "Milk",
            price: 2.5,
            category: "dairy"
        },
        {
            name: "Yogurt",
            price: 1.2,
            category: "dairy"
        }
    ]
    
    //with Insert Many, if anything doesn't pass validation nothing will be inserted
    Product.insertMany(seedProducts)  
    .then(res=> {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })