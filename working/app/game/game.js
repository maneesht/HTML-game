angular.module('app.game', [])
	.controller('gameCtrl',  function($scope){
		$scope.$watch('html', function() {
			$("#container").empty();
			$("#container").append($scope.html);
		})
		$scope.compile = function() {
			console.log("You clicked a button!")
		}
	})
	