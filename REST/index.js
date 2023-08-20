const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
        {
            id: uuid(),
            username: 'Todd',
            comment: 'blablablabalba1'
        },
        {
            id: uuid(),
            username: 'Skyler',
            comment: 'blablablabalba2'
        },
        {
            id: uuid(),
            username: 'Kike',
            comment: 'blablablabalba3'
        },
        {
            id: uuid(),
            username: 'Pepe',
            comment: 'blablablabalba4'
        },
        {
            id: uuid(),
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
    const { username, comment} = req.body
    comments.push({username, comment, id: uuid() });
    console.log(req.body);
    res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
});


app.patch('/comments/:id', (req,res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id); 
    foundComment.comment = newCommentText;
    res.redirect('/comments')

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// GET /comments - list all comments
// POST /comments - create a new comments
// GET  /comments/:id - get one comment (using ID)
// PATCH /comments/:id - Delete comment