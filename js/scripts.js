function Pizza() {
	this.choices = [];
	this.pieSize = '';
	this.price = 0.00;
}

Pizza.prototype.createTopping = function(toppingName, toppingPrice) {
	function Topping(topping, price) {
		this.topping = topping;
		this.price = price;
	}
	var newTopping = new Topping(toppingName, toppingPrice);
	this.choices.push(newTopping);
}

Pizza.prototype.setSize = function(pieSize, sizePrice) {
	function eachSize(inches, price) {
		this.inches = inches;
		this.price = price;
	}
	var newSize = new eachSize(pieSize, sizePrice);
	this.choices.push(newSize);
	return this.pieSize = newSize;
}

Pizza.prototype.priceCalc = function() {
	var totalPrice = 0;
	this.choices.forEach(function(choice) {
		totalPrice += choice.price;
	});
	return this.price = totalPrice;
}

$(function() {
	$('form#pizza-selections').on("submit", function(event) {
		event.preventDefault();
		var newPizza = new Pizza();
		$('input.pizza-item').each(function() {
			if ($(this).prop('checked')) {
				var toppingName = $(this).prop('name');
				var toppingPrice = $(this).val();
				$('ul.output').append('<li class="receipt-list"></li>');
				newPizza.createTopping(toppingName, toppingPrice);
				$('li.receipt-list').last().text(toppingName + ": " + toppingPrice)
			}
		});
	});
});