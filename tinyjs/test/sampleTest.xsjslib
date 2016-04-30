describe("sample test suite", function() {

	beforeEach(function() {
	});

	// it("not ok", function() {
	// 	expect(0).toBe(1);
	// });
	
	function add(a, b) {
    return a+b;
	}


	it("add simple", function() {
	   $.import("calc", "calculator");
	   var calc = $.calc.calculator;
	   var sum = calc.add(1, 1);
	   expect(sum).toBe(2);
	});

});