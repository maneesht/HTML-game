angular.module('app.game', [])
	.controller('gameCtrl',  function($scope, $location, gameData){
		$scope.$watch('html', function() {
			$("#container").empty();
			$("#container").append($scope.html);
		})
		$scope.compile = function() {
			if($scope.html){
				alert("Free Pass! You SHALL PASS!");
				gameData.inMiddleOfMove = false;
				$location.url("/gameBoard");
			}
			else
				$scope.error = true;
		}
	})
	