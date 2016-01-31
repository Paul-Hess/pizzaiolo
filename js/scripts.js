function Pizza() {
	this.choices = [];
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
	this.total = 0;
}

Order.prototype.addPizza = function(pizza) {
	return this.orders.push(pizza);
}

Order.prototype.grandTotal = function(orders) {
	var totalPrice = 0;
	this.orders.forEach(function(index) {
		totalPrice += index.price;
	});
	return this.total = totalPrice;
}

$(function() {

	$('form.pizza-selections').on("submit", function(event) {
		event.preventDefault();
		$('li.receipt-list').remove();
		var newOrder = new Order();
		
		$('div.input-wrapper').each(function() {
			var newPizza = new Pizza();
			var toppingArray = $(this).find('input.pizza-item');
			var sizeArray = $(this).find('input.pizza-size');
			toppingArray.each(function(index) {
				if (toppingArray[index].checked) {
					var name = toppingArray[index].name;
					var price = parseFloat(toppingArray[index].value);
					$('ul.output').append('<li></li>');
					$('li').last().text(name + ': $' + price);
					newPizza.createTopping(name, price);
				}
			});

			sizeArray.each(function(index) {
				if (sizeArray[index].checked) {
					var name = sizeArray[index].id;
					var price = parseFloat(sizeArray[index].value);
					$('ul.output').append('<li></li>');
					$('li').last().text(name + ': $' + price);
					newPizza.createTopping(name, price);
					newPizza.priceCalc(newPizza.choices);
					$('ul.output').append('<li></li>');
					$('li').last().text("This pizza total: $" + newPizza.price.toPrecision(4));
					newOrder.addPizza(newPizza);
				}
			});
		});	
		newOrder.grandTotal(newOrder.orders);
		$('ul.output').append('<li></li>');
		$('li').last().text('grand total: $' + newOrder.total);
		$('form.pizza-selections, button.addFields, div.receipt').toggle(); 
	});
	
	$('button.addFields').click(function(event) {
		event.preventDefault();
		parentContainer = $(this).parents('div').eq(0);
		var clonedSource = parentContainer.find('div.set-one');	
		var cloneSet = clonedSource.clone();
		console.log(cloneSet);
		cloneSet.removeClass('set-one');
		var itemsCount = $('div.input-wrapper').size();
		var radioButtons = cloneSet.find('input.pizza-size');
		radioButtons.each(function() {
			this.id = this.id += itemsCount;
			this.name = this.name += itemsCount;
		});
		$(clonedSource).after(cloneSet);
		return false;
	});

});