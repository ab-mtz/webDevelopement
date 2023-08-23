const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        console.log("Mongo conection open")
    })
    .catch(err => {
        console.log("Mongo conection error")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log("App listening on port 3000")
})
