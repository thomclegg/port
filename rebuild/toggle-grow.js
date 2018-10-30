


//Toggle button to fade-in and fade-out on button/element click - must set object display: none; for it to work!

// $('.toggle-nav').click(function() {
//   $('.site-menu').fadeToggle('slow');
// });


$('.menu, .hamburger').click(function() {
	$('.menu, .site-menu, .hamburger').toggleClass("fs");
	  $(".hamburger").text() == "+"
    ? $(".hamburger").text("✕")
    : $(".hamburger").text("+");
});


