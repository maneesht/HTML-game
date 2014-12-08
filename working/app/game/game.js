angular.module('app.game', [])
	.controller('gameCtrl',  function($scope, $location){
		$scope.$watch('html', function() {
			$("#container").empty();
			$("#container").append($scope.html);
		})
		$scope.compile = function() {
			if($scope.html){
				alert("Free Pass! You SHALL PASS!");
                var points =  parseInt(localStorage.getItem('points'));
                console.log(points);
                var x = points + 3;
                localStorage.setItem('points', x);
                points =  parseInt(localStorage.getItem('points'));
                console.log(points);
                localStorage.setItem("inMiddleOfMove", false);
				$location.url("/gameBoard");
			}
			else
				$scope.error = true;
		}
	})
	