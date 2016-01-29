function Pizza() {
	this.toppings = [];
	this.small = 6.00;
	this.medium = 12.00;
	this.large = 18.00;
	this.price = 0.00;
}

Pizza.prototype.createTopping = function(toppingName, toppingPrice) {
	function Topping(topping, price) {
		this.topping = topping;
		this.price = price;
	}
	var newTopping = new Topping(toppingName, toppingPrice);
	this.toppings.push(newTopping);
}

Pizza.prototype.priceCalc = function(size, toppings) {
	this.toppings.forEach(function(topping) {
		size+=topping.price;
	});
	return this.price = size;
}

$(function() {
	$('form#pizza-selections').on("submit", function(event) {
		event.preventDefault();
		$('input.pizza-item').each(function() {
			if ($(this).prop('checked')) {
				$('ul.output').append('<li class="receipt-list"></li>');
				$('li.receipt-list').text($(this).prop('name') + ": " + $(this).val())
			}
		});
	});
});