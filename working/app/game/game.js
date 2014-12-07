angular.module('app.game', [])
	.controller('gameCtrl',  function($scope, $location){
		$scope.$watch('html', function() {
			$("#container").empty();
			$("#container").append($scope.html);
		})
		$scope.compile = function() {
			if($scope.html){
				alert("Free Pass! You SHALL PASS!");
				$location.url("/exercise");
			}
			else
				$scope.error = true;
		}
	})
	