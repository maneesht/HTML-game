angular.module('app.fillColor', [])
    .controller('fillCtrl', function($scope){
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
    })