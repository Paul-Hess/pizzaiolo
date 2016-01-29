describe('Pizza', function() {
	it('should create a pizza object', function() {
		var testPizza = new Pizza();
		expect(testPizza.choices).to.eql([]);
		expect(testPizza.pieSize).to.equal('');
		expect(testPizza.price).to.equal(0.00);
	});

	it('should dynamically create toppings and affix price', function() {
	var testPizza = new Pizza();
	testPizza.createTopping('artichoke', 1.75);
	expect(testPizza.choices[0]).to.have.any.keys('topping');
	});

	it('should dynamically set the size and size-price of the pizza', function() {
		var testPizza = new Pizza();
		testPizza.setSize('small', 8.00);
		expect(testPizza.pieSize).to.have.any.keys('inches');
	});

	it('should calculate the price of the pizza', function() {
	var testPizza = new Pizza();
	testPizza.createTopping('veg', 1.75);
	testPizza.createTopping('cheese', 4.75);
	testPizza.createTopping('sauce', 0.00);
	testPizza.createTopping('meat', 5.00);
	testPizza.setSize('8 in.', 6.00)
	testPizza.priceCalc(testPizza.choices);
	expect(testPizza.price).to.equal(17.50);
	});
});
