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

    // Finding with Mongoose
    // Movie.find({year: {$gte: 2001}}).then(data=> console.log(data))
    //  Returns an array of content
    // Movie.findById('64e37a39dbf6bd5df45b7936').then(m => console.log(m))


    //Update

    // Movie.updateOne({title: 'Amadeus'}, {year: 1984}).then(res => console.log(res))
    // If there are many results it will only update the firstone

        // Movie.updateOne({title: 'Amadeus'}, {year: 1984}).then(res => console.log(res))
        // Will update all the coincidences

        // Find one and update
        // Movie.findOneAndUpdate({title: 'Amadeus'}, {score: 7.0}).then(m => console.log(m))
        //Returns the data BEFORE the update
        //We have to set the next if we want the updated data
        // Movie.findOneAndUpdate({title: 'Amadeus'}, {score: 7.0}, {new: true}).then(m => console.log(m))


    // Delete 
        // Movie.deleteOne({score: 7}).then(msg => console.log(msg))
        // Movie.findOneAndDelete({title:'Amadeus'}).then(msg => console.log(msg))