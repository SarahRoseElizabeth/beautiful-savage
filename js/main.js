AOS.init();

function systemMessage(event, message = ''){
  const $messageBox = $('.system-message');
  const $messageBoxText = $messageBox.children('.system-message-text');
  const inputMessage = message ? message : "Want to see more? This link is just a mockup link. Scroll down to view the project.";
  $messageBox.addClass('showing').removeClass('hidden');
  $messageBoxText.text(inputMessage);
  setTimeout(function(){
    $messageBox.removeClass('showing').addClass('hidden');
  }, 5000);
}
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
  });

  $('.mobile-menu').on('click', function(){
      $('header nav').toggleClass('show-menu');
  });

});
