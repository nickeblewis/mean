// Test an Angular controller
describe("Controller testing", function () {
    var appCtrl, 
		navCtrl,
		scope;
	
    beforeEach(module("app"))
    beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		appCtrl = $controller('AppCtrl', {
			$scope: scope 
		});
		navCtrl = $controller('NavCtrl', {
			$scope: scope
		});							  
    }))
    
    describe("AppCtrl", function () {
        it("should have a message of hello", function () {
            expect(appCtrl.message).toBe("Hello")		
        })
		it("should have a balance of 1000", function() {
			expect(scope.balance).toBe(1000);
		})
    })		
	
	describe("NavCtrl", function() {
		it("should have a message of test", function() {
			expect(navCtrl.message).toBe("Test")
		})
	})
})
