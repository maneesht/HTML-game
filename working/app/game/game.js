angular.module('app.game', [])
	.controller('gameCtrl',  function($scope, $location){
		$scope.$watch('html', function() {
			$("#container").empty();
			$("#container").append($scope.html);
		})
		$scope.compile = function() {
			if($scope.html){
				alert("Free Pass! You SHALL PASS!");
                localStorage.setItem("inMiddleOfMove", false);
                points =  parseInt(localStorage.getItem('points'));
                console.log(points);
				$location.url("/gameBoard");
			}
			else
				$scope.error = true;
		}
	})
	