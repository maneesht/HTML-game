angular.module('app.fillColor', [])
    .controller('fillCtrl', function($scope, gameData){
    	$scope.view = "instructions";
    	$scope.htmlObj = {};
        $scope.score = 3;
    	$scope.htmlObj.html = "";
    	$scope.$watch('htmlObj.html', function() {
            $(".insert").empty();
            $(".insert").append($scope.htmlObj.html);
            $(".insert").children().addClass("insert");
            validate();
        })
        var option2=Math.floor((Math.random()*3)+1)

		var option=Math.floor((Math.random()*3)+1)
     	$scope.pickBG = function(){
			if(option==1){
				return "#33B5E5";
			}
			if(option==2){
				return "#4CAF50";
			}
			if(option==3){
				return "#00BF46";
			}
		}
		$scope.pickFont = function(){
			
		
			if(option2==1){
				return "#F44336";
			}
			if(option2==2){
				return "#009688";
			}
			if(option2==3){
				return "#CDDC39";
			}
		}
		$scope.compile = function() {
            if($scope.htmlObj.html && validate()){
                alert("You SHALL PASS!");
                gameData.score += $scope.score;
                gameData.inMiddleOfMove = false;
                $location.url("/gameBoard");
            }
            else
                $scope.error = true;
        }
         $scope.askForHint = function() {
            $scope.hint = true;
            $scope.score = 1;
        }
        function validate() {
            return $scope.htmlObj.html.indexOf($scope.pickBG()) > 0 && $scope.htmlObj.html.indexOf($scope.pickFont()) > 0 
        }

    })