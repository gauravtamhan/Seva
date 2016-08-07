$(document).ready(function() {

	var height = $(window).height(); // gets the height of the window

	initialAdjustments();

	function initialAdjustments() {
		$("div#body").css({"margin-top": height - 60 + "px"}); // adjusts the white box's margin to be below the window's height
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