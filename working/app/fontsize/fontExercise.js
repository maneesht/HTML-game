angular.module('app.fontExercise', [])
    .controller('sizeCtrl',  function($scope, $location, gameData){
    	$scope.hint = false;
    	$scope.fontSize = getRandom();
        $scope.$watch('html', function() {
			$(".div").empty();
			$(".div").append($scope.html);
			validate();
		})
        $scope.compile = function() {
			if($scope.html && validate()){
				alert("You SHALL PASS!");
				if($scope.hint) {
					gameData.score = 1;
				} else {
					gameData.score = 3;
				}
				gameData.inMiddleOfMove = false;
				$location.url("/gameBoard");
			}
			else
				$scope.error = true;
		}

		$scope.askForHint = function() {
			$scope.hint = true;
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