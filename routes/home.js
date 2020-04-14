var express = require('express');
var app = express();

//Home Route
app.get('/',home);
function home(req,res) {
  var data = {fname:"Caleb",lname:"Alexander",age:22}
  //home refers to home.handlebars
  res.render('home',{title:"Period Thing",data:data});

}
