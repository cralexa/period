var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
var mysql = require('mysql');
var app = express();

const PORT = 8080;

//form data modules
const bodyParser = require("body-parser");
var multer = require('multer');
var upload = multer();

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded
// for parsing multipart/form-data
app.use(upload.array());

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'caleb',
  password: '',
  database: 'MapBoxDB'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to MapBoxDB.');
});

var server = app.listen(PORT,listening);
function listening() {
  console.log("server is listening...");
}

//Views
app.engine('.hbs',exphbs({defaultLayout:'index',extname:'.hbs'}));
app.set('view ',path.join(__dirname,'views'));
app.set('view engine','.hbs');


app.use(express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free')));
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'static/js')));


//Home Route
app.get('/',home);
function home(req,res) {
  var name = {fname:"Caleb",lname:"Alexander",age:22}
  //home refers to home.handlebars
  res.render('home',{title:"Period Thing",name:name});

}


/////////////////////////////////////////////////////////////////////////////////////////////

//map Route
app.get('/map',function(req,res) {
    //map refers to map.handlebars
  res.render('map',{title:"Period Thing",pageName:"map"});

});

app.post('/SetMarker', function(req, res){

  /* Get data from form */
   var body = req.body;
    var res_body = {
     lat: body.lat,
     lng: body.lng,
     name: body.name,
     describe: body.describe,
     submission: body.submission,
     time_slot: body.time_slot
   };

   // Put data in to database
   connection.query("INSERT INTO MapData SET ?",res_body, function (err, result) {
     if (err) throw err;
     console.log("1 record inserted");
   });

   res.redirect('/mapdata');


});

app.get('/mapdata',function(req,res) {
  var Data = [];
   connection.query("SELECT * FROM MapData", function (err, result, fields) {
    if (err) {
       console.log('error: ' + err.message);
       return null;
    }
    for (var i = 0; i < result.length; i++) {
        Data.push(result[i]);
    }
    res.render('home',{Data:Data,lenght:Data.length});
  });
});


/////////////////////////////////////////////////////////////////////////////////////////////

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
