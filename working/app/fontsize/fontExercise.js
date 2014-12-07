angular.module('app.fontExercise', [])
    .controller('sizeCtrl',  function($scope, $location){
        $scope.$watch('html', function() {
			$("#container").empty();
			$("#container").append($scope.html);
		})
        $scope.compile = function() {
        	console.log("Clicked!");
			if($scope.html && $scope.html.indexOf("div") > -1 && $scope.html.indexOf("font-size") > -1){
				alert("You SHALL PASS!");
				$location.url("/exercise2");
			}
			else
				$scope.error = true;
		}

		function validate() {
			//HTML validate
		}
    })