var App = angular.module('App', []);

App.controller('ProductCtrl', function($scope, $http) {
	$http.get('products.json')
		.then(function(res){
			$scope.products = res.data;                
		});
});

/*function ProductCtrl($scope, $resource) {
	$scope.products = $recource('products.json', {get: {method: 'JSONP'}});
}*/