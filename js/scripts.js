function Pizza() {
	this.choices = [];
	this.price = 0.00;
}

Pizza.prototype.createPizzaAttribute = function(attributeName, attributePrice) {
	function Attribute(attribute, price) {
		this.attribute = attribute;
		this.price = price;
	}
	var newAttribute = new Attribute(attributeName, attributePrice);
	this.choices.push(newAttribute);
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
					newPizza.createPizzaAttribute(name, price);
				}
			});

			sizeArray.each(function(index) {
				if (sizeArray[index].checked) {
					var regexNum = /\d/;
					var name = sizeArray[index].id;
					name = name.replace(regexNum, "");
					var price = parseFloat(sizeArray[index].value);
					$('ul.output').append('<li></li>');
					$('li').last().text(name + ': $' + price);
					newPizza.createPizzaAttribute(name, price);
					newPizza.priceCalc(newPizza.choices);
					$('ul.output').append('<li></li>');
					$('li').last().text("This pizza total: $" + newPizza.price.toPrecision(4));
					newOrder.addPizza(newPizza);
				}
			});
		});	

		newOrder.grandTotal(newOrder.orders);
		$('ul.output').append('<li></li>');
		$('li').last().text('grand total: $' + newOrder.total.toPrecision(4));
		$('form.pizza-selections, button.add-fields, div.receipt').toggle(); 
	});
	
	$('button.add-fields').click(function() {
		parentContainer = $(this).parents('div').eq(0);
		var clonedSource = parentContainer.find('div.set-one');	
		var cloneSet = clonedSource.clone();
		cloneSet.removeClass('set-one');
		var itemsCount = $('div.input-wrapper').size();
		var radioButtons = cloneSet.find('input.pizza-size');
		radioButtons.each(function() {
			this.id = this.id += itemsCount;
			this.name = this.name += itemsCount;
		});

		var radioLabels = cloneSet.find('label.pizza-size');
		radioLabels.each(function() {
			this.id = this.id += itemsCount;
			var labelFor = $(this).prop('for');
			var labelFor = labelFor += itemsCount;
			$(this).prop('for', labelFor);
		});

		var checkBoxes = cloneSet.find('input.pizza-item');
		checkBoxes.each(function() {
			this.id = this.id += itemsCount;
		});

		var labels = cloneSet.find('label.pizza-item');
		labels.each(function() {
			this.id = this.id += itemsCount;
			var labelFor = $(this).prop('for');
			labelFor = labelFor+= itemsCount;
			$(this).prop('for', labelFor);
		});
		$(clonedSource).after(cloneSet);
		if (itemsCount === 6) {
			$('button.add-fields').remove();
		}
		return false;
	});

});