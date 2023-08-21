const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        console.log("Conection open")
    })
    .catch(err => {
        console.log("error")
        console.log(err)
    })

    //We have to create a schema that will be use in the DB

    const movieSchema = new mongoose.Schema({
        title: String,
        year: Number,
        score: Number,
        rating: String,
    })

    //Creating a Movie class
    const Movie = mongoose.model('Movie', movieSchema);
    //Making a new instance of the Movie class
    // const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });

    Movie.insertMany([
        { title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' },   
        { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },   
        { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },   
        { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },   
        { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }   
    ])
        .then(data => {
            console.log("It worked");
            console.log(data);
        })