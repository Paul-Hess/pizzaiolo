describe('Pizza', function() {
	it('should create a pizza object', function() {
		var testPizza = new Pizza();
		expect(testPizza.choices).to.eql([]);
		expect(testPizza.price).to.equal(0.00);
	});

	it('should dynamically create toppings and affix price', function() {
	var testPizza = new Pizza();
	testPizza.createTopping('artichoke', 1.75);
	expect(testPizza.choices[0]).to.have.any.keys('topping');
	});

	it('should calculate the price of the pizza', function() {
	var testPizza = new Pizza();
	testPizza.createTopping('veg', 1.75);
	testPizza.createTopping('cheese', 4.75);
	testPizza.createTopping('sauce', 0.00);
	testPizza.createTopping('meat', 5.00);
	testPizza.createTopping('small', 6.00);	
	testPizza.priceCalc(testPizza.choices);
	expect(testPizza.price).to.equal(17.50);
	});
});

describe('Order', function() {
	it('should hold a collection for ordered pizzas', function() {
		var testOrder = new Order();
		expect(testOrder.orders).to.eql([]);
	});

	it('should dynamically fill the collection with ordered pizzas', function() {
		var testOrder = new Order();
		var testPizza = new Pizza();
		testOrder.addPizza(testPizza);
		expect(testOrder.orders).to.eql([testPizza]);
	})
});
