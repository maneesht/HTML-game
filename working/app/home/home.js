angular.module('app.landing', [])
	.controller('landingCtrl', function($location, $http){
		this.playGame = function() {
			$location.url('/gameBoard')
		}
		if(typeof(Storage) != "undefined") {
			localStorage.setItem('points', 0);
			var asdf = {};
			localStorage.setItem('tiles', asdf);
			localStorage.setItem('currentSpace', 0);
			localStorage.setItem('inMiddleOfMove', false);
		}
	})