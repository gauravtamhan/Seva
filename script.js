$(document).ready(function() {

	var height = $(window).height(); // gets the height of the window

	initialAdjustments();

	function initialAdjustments() {
		$("div#body").css({"margin-top": height - 60 + "px"}); // adjusts the white box's margin to be below the window's height
	}

	document.getElementsByTagName('BODY')[0].onresize = function() {adjustment()}; // does the same thing above but on resize using the adjustment function

	function adjustment() {
		var window_height = $(window).height();
		$("div#body").css({"margin-top": window_height - 60 + "px"});
	}

	$(document).scroll(function() {
		var scrollTop = $(this).scrollTop();
		var pixels = scrollTop / 70;

		if (scrollTop < height) {
			$("div.container-fluid").css({
				"-webkit-filter": "blur(" + pixels + "px)",
				"background-position": "center -" + pixels * 10 + "px"
			});
		}

	});

});