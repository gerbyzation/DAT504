const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = 3000;
const MONGO_URL = 'mongodb://localhost:27017/movies'

mongoose.connect(MONGO_URL);
const db = mongoose.connection;
const app = express();


/*
 * Database schema
 */
db.on('error', console.error)

const personSchema = new mongoose.Schema({
    name: String,
    phoneNumber: Number,
    place: String,
})

const Person = mongoose.model('Person', personSchema);


/*
 * Express routes
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/addressbook/', function (req, res) {
    console.log('query', req.query)
    Person.find(req.query, function (err, persons) {
        if (err) throw err;
        return res.json(persons);
    })
})

app.post('/addressbook/', function (req, res) {
    const person = new Person(req.body);
    person.save(function (err, person) {
        if (err) throw err;
        return res.json({
            'status': 'success',
            'message': `Saved ${req.body.name} in the address book`
        })
    })
})

app.listen(3000, function () {
  console.log(`App Listening on Port ${PORT}`);
});