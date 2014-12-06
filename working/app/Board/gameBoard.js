angular.module('app.gameBoard', [])
	.controller('boardCtrl',  function($scope){
	$scope.display="Roll Dice";
	$scope.rollDice = function(){
		var option=Math.floor((Math.random()*3)+1)
		$scope.display=option
	}
})
	