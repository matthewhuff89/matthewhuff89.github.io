$(document).ready(function(){
  console.log("get you some");

  $("#gratitude-button").click(function(e){
    e.preventDefault();
    $('#purpose').fadeOut(function(){
      $('#gratitude').fadeIn();
    });
  })



});
