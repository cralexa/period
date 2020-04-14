var express = require('express');
var app = express();


//About Route
app.get('/about',about);
function about(req,res) {
  var data = {fname:"Caleb",lname:"Alexander",age:22}
  //home refers to home.handlebars
  res.render('about',{title:"Period Thing",data:data});

}
