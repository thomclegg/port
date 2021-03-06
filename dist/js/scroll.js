$(document).on("scroll", function () {

  var scrollTop = $(document).scrollTop()

  var scrollBottom = scrollTop + $(window).height()

  var pageBottom = $(document).height()

  var diff = pageBottom - scrollBottom

  var opacity = 1 - diff / 400

  $("div.fade-bg").css("opacity", opacity)
})

// scroll to the top of the page using jquery

console.log('hello')
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#js-scroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 3000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
