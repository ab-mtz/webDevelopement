const express = require('express')
const app = express()
const port = 3000

app.get('/getpost', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// GET /comments - list all comments
// POST /comments - create a new comments
// GET  /comments/:id - get one comment (using ID)
// PATCH /comments/:id - Delete comment