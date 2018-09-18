var express=require('express');
var passport = require('passport');
var mysql = require('mysql');
var app=express();
 
app.set('view engine','ejs');
app.set('views','./views');
app.use(passport.initialize());
app.use(passport.session());
var notes=require('./notes');
var users=require('./users');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/notes',notes);


app.use('/users',users);

app.listen(3001);
console.log(" listening");