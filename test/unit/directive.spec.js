describe("Directive testing", function() {
    var element;
    var $scope;
    beforeEach(module("app"))
    beforeEach(inject(function($compile, $rootScope) {
        $scope = $rootScope;
        element = angular.element("<div eh-simple>{{2 + 2}}</div>");
        $compile(element)($rootScope)
    }))

    it('should equal 4', function() {
    $scope.$digest();
    expect(element.html()).toBe("4");
  })
    describe("directive test", function() {
    it("should add a class of plain", function() {
        expect(element.hasClass("plain")).toBe(true);
    })        
})
})