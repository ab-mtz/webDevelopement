const express = require('express');
const app = express();

app.get('/', (req, res)  => {
    res.send('Homepage')
})


app.get('/dogs', (req, res) => {
    res.send('home')
})

app.listen(3000, () => {
    console.log('App serving on localhost: 3000')
})