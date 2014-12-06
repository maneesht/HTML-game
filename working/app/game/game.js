angular.module('app.game', [])
	.controller('gameCtrl',  function($scope){
		$scope.$watch('html', function() {
			$("#container").empty();
			$("#container").append($scope.html);
		})
	})
	