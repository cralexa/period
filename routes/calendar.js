var express = require('express');
var app = express();

//calendar Route
app.get('/calendar',calendar);
function calendar(req,res) {
  //calendar refers to calendar.handlebars
  var date = new Date();
  var months = ["January","Febuary","March","April","May","June","Aguest","September","October","November","December"];
  var dd = date.getMonth();
  console.log("server dd:"+dd);
  res.render('calendar',{title:"Period Thing",monthIndex:dd});

}

app.get('/calendar/:back',calendar);
function calendar(req,res) {
  //calendar refers to calendar.handlebars
  var data = req.params;
  var months = ["January","Febuary","March","April","May","June","Aguest","September","October","November","December"];
  var monthIndex = -1;
  for(var i=0;i<11;i++){
    var mm = months[i].slice(0,3);
    if(mm==data.back){
      monthIndex = i;
    }
  }
  res.render('calendar',{title:"Period Thing",monthIndex:monthIndex});

}
