
angular.module("myApp", ['ui.router', 'ngResource']);

angular.module('myApp')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
     $urlRouterProvider.otherwise('/');
     $locationProvider.html5Mode(true);
}]);
