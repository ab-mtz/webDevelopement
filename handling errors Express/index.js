const express = require('express');
const app = express();
const morgan = require('morgan');


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
    res.send('Sorry you need a password')
}

app.get('/', (req, res)  => {
    res.send('Homepage')
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
app.listen(3000, () => {
    console.log('App serving on localhost: 3000')
})