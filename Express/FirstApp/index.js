const express = require("express");
const app = express()
const port = 3000

//.use respont to any kind of request
// app.use((req,res) => {
//     console.log("NEW Request")
//     // res.send('<h1>This is a test</h1><button>Button</button')  //Res ends the request
// })
app.get('/', (req, res) => {
    res.send("Welcome Homeooooooooooooooeeoooo")
    console.log("Home")
})

app.get('/cats', (req, res) => {
    res.send("MEOW")
    console.log("Cat request")
})

app.get('/dogs', (req, res) => {
    
    res.send("Woof")
    console.log("Dog request")
})

//Implementing path parameters
app.get('/r/:subreddit', (req, res) => {
    const {subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
    console.log("Dog request")
})

app.get('/search', (req, res) => {
    console.log(req.query)
    const { q } = req.query;
    if(!q) {
        res.send('Nothing searched')
    }
    res.send(`<h1>Search restults for: ${q}</h>`)
})

//Managing 404 error. Must be always at the end
app.get('*', (req, res) => {
    res.send("I don't know that path")
})


//Runnig  with the listener port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})