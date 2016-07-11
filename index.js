$(document).ready(function(){
  console.log("get you some");

  $("#gratitude-button").click(function(e){
    e.preventDefault();
    $('#purpose').fadeOut(function(){
      $('#gratitude').fadeIn();
    });
  });

  $('#purpose-button').click(function(e){

  });

  $('#projects-button').click(function(e){

  });

  $('#blogs-button').click(function(e){

  });

});
