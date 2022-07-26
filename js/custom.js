(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);

function SendMessage(){



  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var message=document.getElementById("message").value;

  if(name==""||email==""||message==""){
      alert("Please enter data in all fields.")
  }
  else{

    var link = "mailto:patilshrikrushna77@gmail.com" 
    + "?cc=" +encodeURIComponent(document.getElementById('email').value)
    + "&subject=My Name is " + encodeURIComponent(document.getElementById('name').value)
    + "&body=" + encodeURIComponent(document.getElementById('message').value)
    window.location.href=link;
      // alert("Message has been sent. We will notify you to your E-mail.");

  }
}
