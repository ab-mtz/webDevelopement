const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
        {
            username: 'Todd',
            comment: 'blablablabalba1'
        },
        {
            username: 'Skyler',
            comment: 'blablablabalba2'
        },
        {
            username: 'Kike',
            comment: 'blablablabalba3'
        },
        {
            username: 'Pepe',
            comment: 'blablablabalba4'
        },
        {
            username: 'Robert',
            comment: 'blablablabalba5'
        },
];

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body
    comments.push({username, comment});
    console.log(req.body);
    res.redirect('/comments')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// GET /comments - list all comments
// POST /comments - create a new comments
// GET  /comments/:id - get one comment (using ID)
// PATCH /comments/:id - Delete comment