var express = require('express')
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var beerRoutes = require('./routes/beerRoutes');
var userRoutes = require("./routes/userRoutes");
var User = require("./models/UserModel")
mongoose.connect('mongodb://localhost/beerzzz', function(err, success){
  if(err){
    console.log("Error: " + err)
  }
  console.log("db on");
});

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(express.static('node_modules'));

// Configure passport and session middleware
app.use(expressSession({
  secret: 'yourSecretHere',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Configure passport-local to use user model for authentication
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//This tells the server that when a request comes into '/beers'
//that it should use the routes in 'beerRoutes'
//and those are in our new beerRoutes.js file
app.use('/beers', beerRoutes);
app.use('/users', userRoutes);

app.listen(8000, function() {
  console.log('= ===== ===    ====    ====    ====    ===  ==');
  console.log('= ===== == ==== == ==== == ==== == ==== ==  ==');
  console.log('== === === ==== == ==== == ==== == ==== ==  ==');
  console.log('==== ===== ==== == ==== == ==== == ==== ==  ==');
  console.log('==== ===== ==== == ==== == ==== == ==== ======');
  console.log('==== ======    ====    ====    ====    ===  ==');
  console.log("Fullstack project. Listening on 8000.")
});

