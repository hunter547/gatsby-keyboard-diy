const express = require('express'),
  morgan = require('morgan'),
  bodyParser = require("body-parser"),
  uuid = require("uuid"),
  mongoose = require('mongoose'),
  Models = require('./models.js'),
  cors = require('cors'),
  app = express(),
  path = require('path');

const Stabs = Models.Stabs;

mongoose.connect('mongodb+srv://admin:admin@keyboarddb.ydwf9.mongodb.net/keyboardDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('common'));
app.use(bodyParser.json());
app.use(cors());

var allowedOrigins = ['http://localhost:8000', 'https://keyboard-diy.herokuapp.com', 'https://keyboard-diy.netlify.app'];
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) { // If a specific origin isn’t found on the list of allowed origins
      var message = 'The CORS policy for this application doesn’t allow access from origin ' + origin;
      return callback(new Error(message), false);
    }
    return callback(null, true);
  }
}));

app.get('/stabs', function(req, res) {
  Stabs.find()
    .then(function(stabs) {
      res.status(201).json(stabs)
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send("Error: " + err);
    })
});



























app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Error, please read the console for more details');
});

// listen for requests
var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
  console.log("Listening on Port 3000");
});