describe('Pizza', function() {
	it('should create a pizza object', function() {
		var testPizza = new Pizza();
		expect(testPizza.toppings).to.eql([]);
		expect(testPizza.small).to.equal(6);
		expect(testPizza.medium).to.equal(12);
		expect(testPizza.large).to.equal(18);
		expect(testPizza.price).to.equal(0.00);
	});

		it('should dynamically create toppings and affix price', function() {
		var testPizza = new Pizza();
		testPizza.createTopping('artichoke', 1.75);
		expect(testPizza.toppings[0]).to.have.any.keys('topping');
	});

		it('should calculate the price of the pizza', function() {
		var testPizza = new Pizza();
		testPizza.createTopping('veg', 1.75);
		testPizza.createTopping('cheese', 4.75);
		testPizza.createTopping('sauce', 0.00);
		testPizza.createTopping('meat', 5.00);
		testPizza.priceCalc(testPizza.small, testPizza.toppings);
		expect(testPizza.price).to.equal(17.50);
	});
});
