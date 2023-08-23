const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        console.log("Conection open")
    })
    .catch(err => {
        console.log("error")
        console.log(err)
    })

    const personSchema = new mongoose.Schema({
        first: String,
        last: String
    })

// Moongose virtuals
    personSchema.virtual('fullName').get(function () {
        return `${this.first} ${this.last}`
    })

//Defining Middleware: Running some code before or after 
    personSchema.pre('save', async function () {
        console.log("About to save")
    })
//
    personSchema.post('save', async function () {
        console.log("Just saved")
    })


    const Person = mongoose.model('Person', personSchema);
