$(document).ready(function() {
	var variation = 30;
	var baseColor = randomColor();
	for(var i = 0; i < 525; i++) {
		color = colorVariation(variation, baseColor);
		$("#backgroundContainer").append("<div class=\"block\" style=\"background-color:" + color + ";\"></div>");
	}
	$(document).mousemove(function(event) {
		$(".block").each(function() {
			if(isNear($(this), ($(this).width() + $(this).height()), event)) {
				if(random(0,2) == 1) {
					$(this).css("background-color", colorVariation(variation, baseColor));
				}
			}
		})
	});
});
function random(first, second, firstLimit, secondLimit) {
	second++;
	secondLimit++;
	if(firstLimit != null && first < firstLimit) {
		first = firstLimit;
	}
	if(secondLimit != null && second > secondLimit) {
		second = secondLimit;
	}
	return Math.floor(Math.random() * (second - first) + first);
}
function randomColor() {
	return [random(1,255), random(1,255), random(1,255)];
}
function colorVariation(variation, baseColor) {
	return "rgb(" + random(baseColor[0] - variation, baseColor[0] + variation, 1, 255) + "," + random(baseColor[1] - variation, baseColor[1] + variation, 1, 255) + "," + random(baseColor[2] - variation, baseColor[2] + variation, 1, 255) + ")";
}
function isNear(element, distance, event) {
    var left = element.offset().left - distance;
	var top = element.offset().top - distance;
	var right = left + element.width() + 2*distance;
	var bottom = top + element.height() + 2*distance;
	var x = event.pageX;
	var y = event.pageY;
    return ( x > left && x < right && y > top && y < bottom );
}
