describe('Pizza', function() {
	it('should create a pizza object', function() {
		var testPizza = new Pizza();
		expect(testPizza.toppings).to.eql([]);
		expect(testPizza.small).to.equal(6);
		expect(testPizza.medium).to.equal(12);
		expect(testPizza.large).to.equal(18);
		expect(testPizza.price).to.equal(0.00);
	});
});
