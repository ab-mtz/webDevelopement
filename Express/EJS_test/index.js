const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')) //Instead the current directory, go to the specified directory

app.get('/', (req, res) => { 
    res.render('home.ejs')
})

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})