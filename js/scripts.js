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

Pizza.prototype.priceCalc = function(choicesArray) {
	var totalPrice = 0;
	this.choices.forEach(function(choice) {
		totalPrice += choice.price;
	});
	return this.price = totalPrice;
}

function Order() {
	this.orders = [];
}

Order.prototype.addPizza = function(pizza) {
	return this.orders.push(pizza);
}

$(function() {

	$('form.pizza-selections').on("submit", function(event) {
		event.preventDefault();
		$('li.receipt-list').remove();
		$('div.input-wrapper').each(function() {
			var newPizza = new Pizza();

			$('input.pizza-item').last()	.each(function() {
				if ($(this).prop('checked')) {
					var toppingName = $(this).prop('name');
					var toppingPrice = parseFloat($(this).val());
					$('ul.output').append('<li class="receipt-list"></li>');
					newPizza.createTopping(toppingName, toppingPrice);
					$('li.receipt-list').last().text(toppingName + ": $" + toppingPrice)
				}
			});


			$('input.pizza-size').each(function() {
				if ($(this).prop('checked')) {
					var sizeName = $(this).prop('id');
					var sizePrice = parseFloat($(this).val());
					$('ul.output').append('<li class="receipt-list"></li>');
					newPizza.setSize(sizeName, sizePrice);
					$('li.receipt-list').last().text(sizeName + ": $" + sizePrice)
				}console.log(newPizza);
			});
			console.log(newPizza);
			$('ul.output').append('<li class="receipt-list"></li>');
			var thisTotal = newPizza.priceCalc(newPizza.choices);
			$('li.receipt-list').last().text("This pizza total is: $" + thisTotal);
			$('div.receipt').show();
		});
	});

});