var app = angular.module("app", []);

app.value('version', '0.3');

app.directive("ehSimple", function() {
    return {
        scope: {},
        link: linkFn
    }        
    function linkFn(scope, element) {
        element.addClass("plain");        
    }
});


app.controller("AppCtrl", function ($scope) {
    this.message = "Hello";
	$scope.balance = 1000;
});

app.controller('NavCtrl', function($scope, $location) {
	this.message = "Test";
    $scope.isActive = function(route) {
        return route === $location.path();
    };
});
