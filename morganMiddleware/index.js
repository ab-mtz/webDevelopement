import express from 'express';
const app = express();
import morgan from 'morgan';

// app.use allow us to run code in everey single request
app.use(morgan('tiny')
)

app.get('/', (req, res)  => {
    res.send('Homepage')
})


app.get('/dogs', (req, res) => {
    res.send('home')
})

app.listen(3000, () => {
    console.log('App serving on localhost: 3000')
})