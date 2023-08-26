const express = require('express');
const app = express();
const morgan = require('morgan');


// const morgan = require('morgan');

// app.use allow us to run code in everey single request
app.use(morgan('tiny'))

app.get('/', (req, res)  => {
    res.send('Homepage')
})


app.get('/dogs', (req, res) => {
    res.send('home')
})

app.listen(3000, () => {
    console.log('App serving on localhost: 3000')
})