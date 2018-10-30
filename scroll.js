$(document).on("scroll", function () {

  var scrollTop = $(document).scrollTop()

  var scrollBottom = scrollTop + $(window).height()

  var pageBottom = $(document).height()

  var diff = pageBottom - scrollBottom

  var opacity = 1 - diff / 900

  $("div.fade-bg").css("opacity", opacity)
})
