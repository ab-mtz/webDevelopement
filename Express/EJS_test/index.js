const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')) //Instead the current directory, go to the specified directory

app.get('/', (req, res) => { 
    res.render('home')
})

app.get('/rand', (req, res) => { 
    const num = Math.floor(Math.random() *10) + 1;
    res.render('random', { rand: num })  //We could just write num an that would tell to use num as num
})

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})