angular.module('app.fontExercise', [])
    .controller('sizeCtrl',  function($scope, $location){
    	$scope.hint = false;
    	$scope.points = 3;
    	$scope.fontSize = getRandom();
        $scope.$watch('html', function() {
			$(".div").empty();
			$(".div").append($scope.html);
			validate();
		})
        $scope.compile = function() {
			if($scope.html && validate()){
				alert("You SHALL PASS!");
				var points =  parseInt(localStorage.getItem('points'));
                localStorage.setItem('points', points + $scope.points);
                points =  parseInt(localStorage.getItem('points'));
                console.log(points);
                localStorage.setItem("inMiddleOfMove", false);
				$location.url("/gameBoard");
			}
			else
				$scope.error = true;
		}

		$scope.askForHint = function() {
			$scope.hint = true;
			$scope.points = 1;
		}

		function validate() {
			//HTML validate
			if(!$scope.html || $scope.html.indexOf("<div>") < 0){
				return false;
			}
			var fontSize = $("p").css("font-size");
			return fontSize === $scope.fontSize;
		} 
		function getRandom () {
            return Math.floor((Math.random()*90)+10) + "px";
        }
    })