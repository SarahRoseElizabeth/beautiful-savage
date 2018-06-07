AOS.init();
$(document).ready(function(){

  let navBar = $(".nav-bar");

  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    navBar.addClass("nav-scroll");
	  }

	  else{
		  navBar.removeClass("nav-scroll");
	  }
  })
})
