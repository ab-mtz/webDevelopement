const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError')


app.use(morgan('dev'))


app.use((req, res, next) => {
    console.log('middleware used')
    next();
})


app.use('/dogs', (req, res, next) => {
    console.log(req.query)
    next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    // res.send('Sorry you need a password')
    throw new AppError('Pasword Required!', 401)
}

app.get('/', (req, res)  => {
    res.send('Homepage')
})

app.get('/error', (req, res) => {
    chicken.fly()
})


app.get('/dogs', (req, res) => {
    res.send('home')
})


app.get('/secret', verifyPassword, (req, res) => {
    res.send('My secret is.....')
})


// We can use app.use to manage 404 
app.use((req, res) => {
    // res.send("Sorry, we can't find that page")

    res.status(404).send("Not found")
})

app.use((err, req, res, next) => {
    console.log("*********************************************")
    console.log("********************ERROR********************")
    console.log("*********************************************")
    console.log(err)
    next(err)
})

app.listen(3001, () => {
    console.log('App serving on localhost: 3001')
})

