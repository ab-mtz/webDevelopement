const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("Conection open")
    })
    .catch(err => {
        console.log("error")
        console.log(err)
    })

    //Defining Schema

    const productSchema = new mongoose.Schema({
        name: { 
            type: String,
            required: true
        },
        price: {
            type: Number,
            // require: true
        }

    });

    const Product = mongoose.model('Product', productSchema);

    const bike = new Product({ price: 599})    //name: 'Mountain Bike',
    bike.save()
        .then(data => {
            console.log("Worked");
            console.log(data);
        })
        .catch(err => {
            console.log("Error");
            console.log(err.errors);
        })