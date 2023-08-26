const express = require('express');
const app = express();
const morgan = require('morgan');


// const morgan = require('morgan');

// app.use allow us to run code in everey single request
app.use(morgan('dev'))
app.use((req, res, next) => {
    console.log(req.method.toUpperCase(), req.path)
    next();
})


//Function that works on every request
app.use((req, res, next) => {
    console.log('middleware used')
    next();
})
app.use((req, res, next) => {
    console.log('middle ware 2 used')
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log("another middleware that only runs trough this path")
    next();
})

app.get('/', (req, res)  => {
    res.send('Homepage')
})


app.get('/dogs', (req, res) => {
    res.send('home')
})

app.listen(3000, () => {
    console.log('App serving on localhost: 3000')
})