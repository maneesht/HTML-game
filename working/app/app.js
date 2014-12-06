angular.module('html_game' , ['ngRoute', 'app.landing', 'app.game', 'app.gameBoard'])
	.config(function($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: "app/home/home.html",
			controllerAs: "home",
			controller: "landingCtrl"
		})
		.when('/game', {
			templateUrl:"app/game/game.html",
			controller: "gameCtrl",
			controllerAs: "game"
		})
		.when('/gameBoard', {
			templateUrl: "app/Board/gameBoard.html",
			controller: "boardCtrl"
		})
	});