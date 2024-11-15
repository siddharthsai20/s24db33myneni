// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// require('dotenv').config();
// const connectionString = process.env.MONGO_CON
// mongoose = require('mongoose');
// mongoose.connect(connectionString);

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var conferenceRouter = require('./routes/conference');
// var gridRouter = require('./routes/grid');
// var pickRouter = require('./routes/pick'); 
// var resourceRouter = require('./routes/resource');
 
// var app = express();
 
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
 
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
 
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/conference', conferenceRouter);
// app.use('/grid', gridRouter);
// app.use('/pick', pickRouter);
// app.use('/resource', resourceRouter);

// var Conference = require("./models/conference");


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
 
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
 
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
 
// module.exports = app;
// <<<<<<< HEAD
// //Get the default connection
// var db = mongoose.connection;
// //Bind connection to error event
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once("open", function(){
// console.log("Connection to DB succeeded")}); 

// // We can seed the collection if needed on server start
// async function recreateDB(){
//  // Delete everything
//  await Conference.deleteMany();
//  let instance1 = new Conference({conference_name: 'Tech Innovators', location: 'New York', year: 2021 });
//  let instance2 = new Conference({conference_name: 'Global Health Summit', location: 'Geneva', year: 2019});
//  let instance3 = new Conference({conference_name: 'AI & Machine Learning', location: 'San Francisco', year: 2023});
//  instance1.save().then(doc=>{
//  console.log("First object saved")}
//  ).catch(err=>{
//  console.error(err)
//  });
//  instance2.save().then(doc=>{
//   console.log("Second object saved")}
//   ).catch(err=>{
//   console.error(err)
//   });
// instance3.save().then(doc=>{
//   console.log("Third object saved")}
//   ).catch(err=>{
//   console.error(err)
//   });
// }
// let reseed = true;
// if (reseed) {recreateDB();}
// =======
 
// >>>>>>> e2e4209d4ebe1e82f6c390df501f82824f10e78b

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

const connectionString = process.env.MONGO_CON;

const mongoose = require('mongoose');

mongoose.connect(connectionString);

var db = mongoose.connection;

//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
  console.log("Connection to DB succeeded")
});

// Route imports
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const gridRouter = require('./routes/grid');
const pickRouter = require('./routes/pick');
const resourceRouter = require('./routes/resource');
var conferenceRouter = require('./routes/conference');

// Schema definition
const conferenceSchema = new mongoose.Schema({
  conference_name: String,
  location: String,
  year: Number
});

const Conference = mongoose.models.Conference || mongoose.model('Conference', conferenceSchema);

// Database seeding function
async function recreateDB() {
  await Conference.deleteMany();
  
  let instance1 = new Conference({ conference_name: 'Tech Innovators', location: 'New York', year: 2021 });
  let instance2 = new Conference({ conference_name: 'Global Health Summit', location: 'Geneva', year: 2019 });
  let instance3 = new Conference({ conference_name: 'AI & Machine Learning', location: 'San Francisco', year: 2023 });

  await instance1.save().then(doc => {
    console.log("First object saved:", doc);
  }).catch(err => {
    console.error(err);
  });

  await instance2.save().then(doc => {
    console.log("Second object saved:", doc);
  }).catch(err => {
    console.error(err);
  });

  await instance3.save().then(doc => {
    console.log("Third object saved:", doc);
  }).catch(err => {
    console.error(err);
  });
}

let reseed = true;
if (reseed) {
  recreateDB();
}

// Express app setup
const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/conference', conferenceRouter);
app.use('/grid', gridRouter);
app.use('/selector', pickRouter);
app.use('/resource', resourceRouter);

// Error handling
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;