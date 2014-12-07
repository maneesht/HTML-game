angular.module('app.textAlign', [])
	.controller('alignCtrl',  function($scope, $location){
		$scope.htmlObj = {};
		$scope.htmlObj.html = "";
		$scope.pickAlign = function(){
		var option=Math.floor((Math.random()*3)+1)
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
		   $scope.compile = function() {
            if($scope.htmlObj.html && validate()){
                alert("You SHALL PASS!");
                $location.url("/textAlign");
            }
            else
                $scope.error = true;
        }
        function validate() {
            var alignment = ;
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