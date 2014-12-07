angular.module('app.landing', [])
	.controller('landingCtrl', function($location, gameData){
		this.playGame = function() {
			$location.url('/gameBoard')
		}
	})