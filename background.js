var angle = 0

var changeBackground = function () {
	angle = angle + 0.3

	document.body.style.backgroundImage = "linear-gradient(" + angle + "deg, #29eee4, #678efd)"

	requestAnimationFrame(changeBackground)

}

changeBackground()