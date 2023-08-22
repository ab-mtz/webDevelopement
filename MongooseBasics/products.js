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
            required: true,
            maxlenght: 20
        },
        price: {
            type: Number,
            require: true,
            min: [0, 'Price must be positive'] //This validates that the input value is correct

        },
        onSale: { 
            type: Boolean,
            default: false
        },
        categories: [String],
        qty: {
            online: {
                type: Number,
                default: 0
            },
            inStore: {
                type: Number,
                default: 0
            }
        }
    });

        //Model instance Methods
    productSchema.methods.toggleOnSale = function () {
        this.onSale = !this.onSale;
        return this.save();
    }

    productSchema.methods.addCategory = function (newCat) {
        this.categories.push(newCat);
        return this.save();
    }

    const Product = mongoose.model('Product', productSchema);

    const findProduct = async () => {
        const foundProduct = await Product.findOne({name: 'Tire Pump'});
        console.log(foundProduct);
        await foundProduct.toggleOnSale();
        console.log(foundProduct);

        await foundProduct.addCategory('Outdoors')
        console.log(foundProduct);
    }

    findProduct();
    // const bike = new Product({ name: 'Tire Pump', price: 19.90})    
    // bike.save()
    //     .then(data => {
    //         console.log("Worked");
    //         console.log(data);
    //     })
    //     .catch(err => {
    //         console.log("Error");
    //         console.log(err.errors);
    //     })

    // Update
    // Product.findOneAndUpdate({ name: 'Tire Pump'}, {onSale: true, qty{online: 3}}, {new: true, runValidators: true})    
    // // bike.save()
    //     .then(data => {
    //         console.log("Worked");
    //         console.log(data);
    //     })
    //     .catch(err => {
    //         console.log("Error");
    //         console.log(err.errors);
    //     })