var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.submit = function () { 
  	console.log($scope.search);
  };
});
