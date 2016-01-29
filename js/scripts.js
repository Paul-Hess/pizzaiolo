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