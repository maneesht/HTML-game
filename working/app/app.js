angular.module('html_game' , ['ngRoute', 'app.landing', 'app.game', 'app.gameBoard', 'app.fontExercise'])
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
		.when('/exercise', {
			templateUrl:"app/fontsize/fontExercise.html",
			controller: "sizeCtrl"
		})
		.when('/gameBoard', {
			templateUrl: "app/Board/gameBoard.html",
			controller: "boardCtrl"
		})
	});