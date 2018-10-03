const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

const MongoClient = mongodb.MongoClient;

const app = express();

const PORT = 3000;
const MONGO_URL = 'mongodb://localhost:27017/movies'
let db = undefined;

MongoClient.connect(
  MONGO_URL,
  function (error, client) {
    if (error) throw error;
    console.log("MongoDB database created");
    db = client.db('movies');
    db.createCollection('movies', function (err, res) {
      if (err) throw err;
      console.log('Movies collection created');
    })
  }
)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Required to be able to make POST requests with JSON database

app.get('/', function (req, res) {
  return res.send('You made a GET request to "/"');
});

app.get('/about', function (req, res) {
  return res.send("My name is Gerrit");
})

// Save movie to mongo
app.post('/movie', function (req, res) {
  db.collection('movies').insertOne(req.body, function (err) {
    if (err) throw err;
    console.log("1 movie inserted");

    res.write('Saving the following movie data:\n')
    return res.end(JSON.stringify(req.body, null, 2))
  })
})

// Retrieve movie by specific ID:
app.get('/movie/:movieId', function (req, res) {
  const movieId = req.params.movieId; // Get the movieId from the URL parameter
  console.log("requesting ID", movieId)
  db.collection('movies').findOne({ _id: movieId }, function (err, result) {
    if (err) throw err;
    return res.json(result)
  });
});

app.listen(3000, function () {
  console.log(`App Listening on Port ${PORT}`);
});
