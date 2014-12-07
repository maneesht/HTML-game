angular.module('app.game', [])
	.controller('gameCtrl',  function($scope){
		$scope.$watch('html', function() {
			$("#container").empty();
			$("#container").append($scope.html);
		})
		$scope.compile = function() {
			if($scope.html)
				alert("Free Pass! You may proceed.");
			else
				$scope.error = true;
		}
	})
	