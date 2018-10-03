const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = 3000;
const MONGO_URL =
  'mongodb://localhost:27017/addressbook';

mongoose.connect(MONGO_URL, { useNewUrlParser: true });

const db = mongoose.connection;
const app = express();

// Log mongoDB error
db.on(
  'error',
  (error) => console.log("MongoDB error", error)
);

// MongoDB Schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: String,
  place: { type: String, required: true},
  email: String,
  age: { type: Number, required: true},
  hobbies: [String],
})

// Turn schema into model
const Person = mongoose.model('Person', personSchema);

// Express routes
app.use(bodyParser.json());

app.get('/', function (request, response) {
  return response.json({
    'status': 'Success',
    'message': 'hey dude',
  })
});

// Create entry in address book
app.post('/addressbook/', (request, response) => {
  const newPerson = new Person(request.body);
  newPerson.save(function (error) {
    if (error) throw error; // If any of the required fields are missing,
                            // this will throw an error and stop person being saved
    return response.send(
      `Saved ${request.body.name} to address book`);
  })
})

// Get all or filter people
// Specify filters with url queries, eg /addressbook/?place=Plymouth&age=24
app.get('/addressbook/', (request, response) => {
  Person.find(request.query, function (error, people) {
    if (error) throw error;
    return response.json(people);
  });
})

// Update existing person in address book
app.put('/addressbook/:personId/', (request, response) => {
  console.log("userId", request.params.personId);
  // how I updated the person in the session:
  /*
  Person.findById(
    request.params.personId,
    function (error, person) {
      person.name = request.body.name || person.name;
      person.phoneNumber = request.body.phoneNumber || person.name;
      person.age = request.body.age || person.name;
      person.place = request.body.place || person.name;
      person.email = request.body.email || person.name;
      person.hobbies = request.body.hobbies || person.name;
      person.save();
      return response.send('this will update users in a bit');
    }
  )
  */
  // easier way of doing it:
  Person.findByIdAndUpdate(
    request.params.personId,
    request.body,
    function (err, person) {
      if (err) throw err;
      console.log('updated', person);
      return response.send(`updated ${person.name}`)
    }
  )
})

app.listen(PORT, function() {
  console.log(`Server listening at ${PORT}`)
});
