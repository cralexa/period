var week =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
var WorkDate = new Date();

var dd = WorkDate.getDate();
var mm = WorkDate.getMonth();
var Head = document.getElementsByClassName("Cal-head");
Head[0].innerHTML = months[monthIndex];
WorkDate.setMonth(monthIndex);
WorkDate.setDate(1); // 1 meaning first this can change to any day of the month 0 means the last day of last month

var str = WorkDate.toString();
var first = str.slice(0,3); // first 3 char being the weekday

var offset = 0;
for(var i=0;i<7;i++){
  if(week[i]==first){
    offset = i;
  }
}

for (var i = 0; i < offset; i++) {
    document.getElementById("box").innerHTML += "<div class='card'> </div>";
}

//find max days in a month

WorkDate.setMonth((monthIndex+1));
WorkDate.setDate(0); // 1 meaning first this can change to any day of the month 0 means the last day of last month
var max = WorkDate.getDate();

//
for (var i = 1; i <= max; i++) {
  if (i == dd && mm == monthIndex) {
    document.getElementById("box").innerHTML += "<div class='card' id='day'>"+i+"</div>";
  }
  else{
    document.getElementById("box").innerHTML += "<div class='card'>"+i+"</div>";
  }

}
