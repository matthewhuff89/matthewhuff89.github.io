$(document).ready(function(){

  $("#gratitude-button").click(function(e){
    e.preventDefault();
    $('.active').fadeOut(function(){
      $('.active').removeClass('active');
      $('#gratitude').addClass('active');
      $('#gratitude').fadeIn("slow");
    });
  });

  $('#purpose-button').click(function(e){
    e.preventDefault();
    $('.active').fadeOut(function(){
      $('.active').removeClass('active');
      $('#purpose').addClass('active');
      $('#purpose').fadeIn("slow");
    });
  });

  $('#projects-button').click(function(e){
    e.preventDefault();
    $('.active').fadeOut(function(){
      $('.active').removeClass('active');
      $('#projects').addClass('active');
      $('#projects').fadeIn("slow");
    });
  });

  $('#blogs-button').click(function(e){
    e.preventDefault();
    $('.active').fadeOut(function(){
      $('.active').removeClass('active');
      $('#blogs').addClass('active');
      $('#blogs').fadeIn("slow");
    });
  });

});
