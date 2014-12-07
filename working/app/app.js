angular.module('html_game' , ['ngRoute', 'app.landing',
	 'app.game', 'app.gameBoard', 'app.table', 'app.fontExercise', 'app.fillColor', "app.win"])
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
		.when('/table', {
			templateUrl: "app/tableEx/tableEx.html",
			controller: "tableCtrl"
		})
		.when('/fillColor',{
			templateUrl: "app/fillEx/fillEx.html",
			controller: "fillCtrl"
		})
		.when("/win", {
			templateUrl: "app/win/win.html",
			controller: "winCtrl"
		})
	})
	.service('gameData', function() {
		var data = {
			score: 0,
			spacesLeft: 12,
			currentSpace : 0,
			spacesToMove: 0,
			tiles: {}
		};
		return data;
	});
