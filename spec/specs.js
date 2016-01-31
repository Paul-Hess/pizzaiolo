describe('Pizza', function() {
	it('should create a pizza object', function() {
		var testPizza = new Pizza();
		expect(testPizza.choices).to.eql([]);
		expect(testPizza.price).to.equal(0.00);
	});

	it('should dynamically create toppings and affix price', function() {
	var testPizza = new Pizza();
	testPizza.createPizzaAttribute('artichoke', 1.75);
	expect(testPizza.choices[0]).to.have.any.keys('attribute');
	});

	it('should calculate the price of the pizza', function() {
	var testPizza = new Pizza();
	testPizza.createPizzaAttribute('veg', 1.75);
	testPizza.createPizzaAttribute('cheese', 4.75);
	testPizza.createPizzaAttribute('sauce', 0.00);
	testPizza.createPizzaAttribute('meat', 5.00);
	testPizza.createPizzaAttribute('small', 6.00);	
	testPizza.priceCalc(testPizza.choices);
	expect(testPizza.price).to.equal(17.50);
	});
});

describe('Order', function() {
	it('should hold a collection for ordered pizzas', function() {
		var testOrder = new Order();
		expect(testOrder.orders).to.eql([]);
		expect(testOrder.total).to.equal(0);
	});

	it('should dynamically fill the collection with ordered pizzas', function() {
		var testOrder = new Order();
		var testPizza = new Pizza();
		testOrder.addPizza(testPizza);
		expect(testOrder.orders).to.eql([testPizza]);
	});

	it('should calculate the grand total of all pizzas', function() {
		var testOrder = new Order();
		var testPizza = new Pizza();
		var testPizza2 = new Pizza();
		testPizza.createPizzaAttribute('small', 6.00);
		testPizza2.createPizzaAttribute('large', 20.00);
		testPizza.priceCalc(testPizza.choices);
		testPizza2.priceCalc(testPizza2.choices);
		testOrder.addPizza(testPizza);
		testOrder.addPizza(testPizza2);
		testOrder.grandTotal(testOrder.orders);
		expect(testOrder.total).to.equal(26.00);
	});
});
