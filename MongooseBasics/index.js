const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        console.log("Conection open")
    })
    .catch(err => {
        console.log("error")
        console.log(err)
    })