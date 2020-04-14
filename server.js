var express = require('express');
const path = require('path');
var exphbs = require('express-handlebars');
//var lessMiddleware = require('less-middleware');

var app = express();

var server = app.listen(8080,listening);
function listening() {
  console.log("server is listening...");
}

//Views
app.engine('.hbs',exphbs({defaultLayout:'index',extname:'.hbs'}));
app.set('view ',path.join(__dirname,'views'));
app.set('view engine','.hbs');

//app.use(lessMiddleware(path.join(__dirname, 'static')));

app.use(express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free')));
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'static/js')));



/*
var indexRouter = require('./routes/home');
var aboutRouter = require('./routes/about');
var calendarRouter = require('./routes/calendar');


app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/calendar', calendarRouter);
app.use('/calendar/:back', calendarRouter);
*/

//Home Route
app.get('/',home);
function home(req,res) {
  var data = {fname:"Caleb",lname:"Alexander",age:22}
  //home refers to home.handlebars
  res.render('home',{title:"Period Thing",data:data});

}

//map Route
app.get('/map',map);
function map(req,res) {
  var data = {fname:"Caleb",lname:"Alexander",age:22}
  //map refers to map.handlebars
  res.render('map',{title:"Period Thing",pageName:"map",data:data});

}

var date = new Date();

//calendar Route
app.get('/calendar',calendar_A);
function calendar_A(req,res) {
  //calendar refers to calendar.handlebars
  var dd = date.getMonth();
    res.render('calendar',{title:"Period Thing",monthIndex:dd});

}
app.get('/calendar/:input',calendar_B);
function calendar_B(req,res) {
  //calendar refers to calendar.handlebars
  var data = req.params;
  if (data.input == "next") {
    date.setMonth((date.getMonth()+1));
  } else {
    date.setMonth((date.getMonth()-1));
  }
  var dd = date.getMonth();
  res.render('calendar',{title:"Period Thing",monthIndex:dd});

}

/*
app.get('/calendar/:month',calendar_B);
function calendar_B(req,res) {
  //calendar refers to calendar.handlebars
  var data = req.params;
  var months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
  var monthIndex = -1;
  for(var i=0;i<11;i++){
    var mm = months[i].slice(0,3);
    if(mm==data.month){
      monthIndex = i;
    }
  }
  res.render('calendar',{title:"Period Thing",monthIndex:monthIndex});

}
*/
