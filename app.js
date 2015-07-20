var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $http, $q) {
	$scope.searchQuery = '';
	$scope.searchQueryAmt = 0;

	$scope.submit = function () { 
		$scope.searchQuery = $scope.search;
		$scope.search = '';
		$scope.doSearch();
		console.log($scope.searchQuery);
	};

	$scope.doSearch = function () {
		var url = "https://api.instagram.com/v1/tags/" + $scope.searchQuery + "/media/recent",
			request = {
				callback: 'JSON_CALLBACK',
				client_id: 'e4cf3dcd43bc45e8a54771b2a2f13b32'
			};
		$http({
			method: 'JSONP',
			url: url,
			params: request
		})
		.success(function (result) {
			$scope.dataSet = result.data;
			$scope.searchQueryAmt = $scope.dataSet.length;
			console.log($scope.dataSet);
		})
		.error(function () {
			console.log('error');
		});
	};
});
