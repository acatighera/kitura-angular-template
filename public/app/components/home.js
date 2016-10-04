angular.
module('myApp').
component('home', {
  template: '{{$ctrl.msg}}',
  controller: function GreetUserController($scope) {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
          $scope.$ctrl.msg = httpRequest.responseText;
          $scope.$apply();
      }
    }
    httpRequest.open('GET', 'hello');
    httpRequest.send(null);
  }
});
