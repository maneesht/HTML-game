angular.module('app.landing', [])
	.controller('landingCtrl', function($location){
		this.playGame = function() {
			$location.url('/game')
		}
	})