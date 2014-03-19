var app = angular.module("app", [])

app.value('version', '0.3');

app.controller("AppCtrl", function () {
    this.message = "Hello";
});