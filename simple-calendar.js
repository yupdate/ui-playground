//Calendar

//html
<div class="container">
  <div class='month-control'>
    <span class='minus-month'><</span>
    <span class='month-name'></span>
    <span class='plus-month'>></span>
  </div>
  <ul class="calendar"></ul>
</div>


//css
.container {
  text-align: center;
  width: 400px
}
ul.calendar {
  background: #f1f1f1;
  list-style-type: none;
  width: 350px;
  display: flex;
  flex-flow: row wrap;
}

ul.calendar li {
  width: 50px;
}

.month-control .month-name{
  margin: 0 30px;
}

//js
$(function() {
  

var now = new Date();
var year = now.getFullYear(),
    month = now.getMonth() + 1;

var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

renderCalendar(year, month);

function renderCalendar(year, month) {
  var _calendar = $('.calendar');
  $('.calendar li').remove();
  $('.month-name').text(month + '/' +year);
  
  days.forEach(function(day){
      _calendar.append('<li>' + day + '</li>')
  });
  
  var firstDay = new Date(year, month-1, 1).getDay();
  var numsOfDay = new Date(year, month, 0).getDate();
    console.log(month,firstDay, numsOfDay);

  for(var i=0;i<firstDay;i++) {
    _calendar.append('<li></li>');
  }
  
  for(var i=1;i<=numsOfDay;i++) {
    _calendar.append('<li>' + i + '</li>')
  }
  
}

$('.minus-month').click(function() {
  if(month===1) {
    year--;
    month=12;
  }else{
    month--;
  }
  console.log(year, month);
  renderCalendar(year, month);
});

$('.plus-month').click(function() {
  if(month===12) {
    year++;
    month=1;
  }else{
    month++;
  }
    console.log(year, month);
  renderCalendar(year, month);
});
  
});
