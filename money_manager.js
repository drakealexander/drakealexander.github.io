$(document).ready(function() {
	var money = 0;
	var clickPower = 1;
	var productionCost = 10;
	var production = 0;
	$("#button").click(function() {
		money += clickPower;
		$("#money").empty().append(money.toFixed(2));
	});
	$("#upgrade").click(function() {
		if(money >= productionCost) {
			money -= productionCost;
			$("#money").empty().append(money.toFixed(2));
			production++;
			clickPower += .1;
			$("#clickPower").empty().append(clickPower.toFixed(2));
			productionCost *= 1.3;
			$("#productionCost").empty().append(productionCost.toFixed(2));
		}
	});
	setInterval(function() {
		money += production;
		$("#money").empty().append(money.toFixed(2));
	}, 1000);
});
