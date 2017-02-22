//html
<a class='name' data-id='1' href='#'>
  Alice
</a>
<a class='name' data-id='2' href='#'>
  Bob
</a>

//css
.name {
  margin: 50px;
  display: inline-block;
  position: relative;

}

.tooltip-img {
  width: 100px;
  height: 100px;
  margin: 10px;
  background-color: pink;
}

.tooltip {
  position: absolute;
  background: gray;
  z-index: 999;
  width: 150px;
  left: calc(50% - 75px);
  text-align: center;
  border-radius: 6px;
  top: 150%;
}

.tooltip::after {
border-width: 5px;
  border-style: solid;
  border-color: transparent transparent gray transparent;
  bottom: 100%;
  left: calc(50% - 3px);
  position: absolute;
  content: "";
}

//js
$(function() {
  var persons = [];
  
  function renderTooltip(person) {
    return '<div class="tooltip">' +
              '<img class="tooltip-img">' +
              '<div class="text-info">' +
                '<p>Name: ' + person.name + '</p>' + 
                '<p>Title: ' + person.title + '</p>' + 
                '<p>Degree: ' + person.degree + '</p>' + 
              '</div>' + 
           '</div>';  
  }
  
  $('.name').click(function() {
    var _this = $(this);
    var pId = _this.data('id');
    var name = _this.text();

    $('.tooltip').remove();
    
      if(persons[pId]) {
        _this.append(renderTooltip(persons[pId]));
      }else{
        setTimeout(function() {
          persons[pId] = {
            title: 'Dev Eng',
            degree: 'Master',
            name: name
          };
        
          _this.append(renderTooltip(persons[pId]));
        }, 3000);
      } 

  });
});
