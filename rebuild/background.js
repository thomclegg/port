var angle = 0;

var changeBackground = function () {
	angle = angle + 0.5;

	document.body.style.backgroundImage = "linear-gradient(" + angle + "deg, #29eee4 #e0a2f1)";

	requestAnimationFrame(changeBackground);

}

