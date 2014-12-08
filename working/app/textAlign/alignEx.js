angular.module('app.textAlign', [])
	.controller('alignCtrl',  function($scope, $location, gameData){
        var score = 3;
        var option=Math.floor((Math.random()*3)+1)
		$scope.$watch('html', function() {
            $("#container").empty();
            $("#container").append($scope.html);
            $("#container").addClass('insert')
            validate();
        })
        $scope.pickAlign = function(){
		
			if(option==1){
				return "left";
			}
			if(option==2){
				return "center";
			}
			if(option==3){
				return "right";
			}
		}
        $scope.askForHint = function() {
            $scope.hint = true;
        }
		   $scope.compile = function() {
            if($scope.html && validate()){
                alert("You SHALL PASS!");
                $location.url("/gameBoard");
                gameData.inMiddleOfMove = false;
                gameData.score += score;
            }
            else{
                score = 2;
                $scope.error = true;
            }
        }
        function validate() {
            var a = $('.insert').children().css("text-align");
            return a == $scope.pickAlign();
        }
	})