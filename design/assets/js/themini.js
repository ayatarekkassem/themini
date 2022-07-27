$(document).ready(function(){
    $(".owl-carousel").owlCarousel();


    
    var scrollButton = $('#scroll-top'),
   // head=$('nav'),
    header=$('header')
$(window).scroll(function() {
$(this).scrollTop() >= 200 ? scrollButton.show() : scrollButton.hide();
//$(this).scrollTop() >= 200 ? head.addClass('sticky'): head.removeClass('sticky');
$(this).scrollTop() >= 200 ? header.addClass('sticky'): header.removeClass('sticky');

});
scrollButton.click(function() {
$('html,body').animate({ 
  scrollTop : 0 
}, 600);
});


  /*Nice Scroll*/
  $("body").niceScroll({
    cursorcolor: "#fa5460",
    cursorwidth: "7px",
    cursorborder: "1px solid #fa5460"
  });



  //validation
  var formInput = $(".form-input").val();

  $('.input-btn').click(function(){
    //console.log("ssf");

    if(formInput == ""){
      //console.log("ffff");
      $('.form-input').addClass("error");
    }else{
      $('.form-input').removeClass("error");
    }
  });

  //loader
  $('.loader').delay(2000).fadeOut('slow');

  //bootstrap popup
  $(".btn-first").click(function(){
    $(".model-first").show();
  });
  $(".btn-second").click(function(){
    $(".model-second").show();
  });
  $(".btn-third").click(function(){
    $(".model-third").show();
  });
  $(".btn-fourth").click(function(){
    $(".model-fourth").show();
  });
  $(".btn-fiveth").click(function(){
    $(".model-fiveth").show();
  });
  $(".btn-sexth").click(function(){
    $(".model-sexth").show();
  });
  $(".btn-seventh").click(function(){
    $(".model-seventh").show();
  });
  $(".btn-eightth").click(function(){
    $(".model-eightth").show();
  });
  $(".btn-nineth").click(function(){
    $(".model-nineth").show();
  });

    /*popup*/
  $('.test-popup-link').magnificPopup({
	type: 'image'
	
  });

  });