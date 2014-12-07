angular.module('app.fillColor', [])
    .controller('fillCtrl', function($scope){
    	$scope.view = "instructions";
    	$scope.htmlObj = {};
    	$scope.htmlObj.html = "";
    	$scope.$watch('htmlObj.html', function() {
            $("#container").empty();
            $("#container").append($scope.htmlObj.html);
        })
     	$scope.pickBG = function(){
		var option=Math.floor((Math.random()*3)+1)
			if(option==1){
				return "blue";
			}
			if(option==2){
				return "green";
			}
			if(option==3){
				return "red";
			}
		}
		$scope.pickFont = function(){
			var option2=Math.floor((Math.random()*3)+1)
		
			if(option2==1){
				return "white";
			}
			if(option2==2){
				return "purple";			}
			if(option2==3){
				return "yellow";
			}
		}
		$scope.compile = function() {
            if($scope.htmlObj.html && validate()){
                alert("You SHALL PASS!");
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
            var rows = $('table').find("tr");
            var numOfRows = rows.length;
            if($scope.rowsNeeded !== numOfRows)
                return false
            for(var i = 0; i < numOfRows; i++) {
                var numOfColumns = rows.eq(i).find('td').length;
                if(numOfColumns !== $scope.columnsNeeded)
                    return false;
            }
            return true;
        }
    })