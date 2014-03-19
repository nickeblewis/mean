// Test an Angular value
describe('version', function() {
    beforeEach(module('app'));

    it('should return current version', inject(function(version) {
        expect(version).toEqual('0.3');
    }));
});

// Test an Angular controller
describe("Controller testing", function () {
    var appCtrl;
    beforeEach(module("app"))
    beforeEach(inject(function ($controller) {
        appCtrl = $controller("AppCtrl");
    }))
    
    describe("AppCtrl", function () {
        it("should have a message of hello", function () {
            expect(appCtrl.message).toBe("Hello")
        })
    })
})

// Test an Angular directive
