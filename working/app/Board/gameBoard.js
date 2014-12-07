angular.module('app.gameBoard', [])
    .controller('boardCtrl',  function($scope, $location, gameData){
    $scope.display="Roll Dice";
    $scope.dis = true;
    if(gameData.inMiddleOfMove) {
    	$scope.disableDice = true;
    } else {
    	$scope.disableDice = false;
    }
    $scope.tiles = gameData.tiles;
    for (var i = 11; i >= 0; i--) {
        if(!$scope.tiles[i]) {
            $scope.tiles[i] = {
                display: false
            };
        }
    };
    $scope.rollDice = function() {
       var done = _.filter(gameData.tiles, "pass").length == 12 ? true : false;
        if(!gameData.inMiddleOfMove && !done) {
            var option=Math.floor((Math.random()*3)+1);
            gameData.spacesToMove = option;
            $scope.display=option;
            gameData.currentSpace = option + gameData.currentSpace;
            setImage(gameData.currentSpace);
            alert("You rolled a " + option + "!");
            gameData.inMiddleOfMove = true;
            $scope.disableDice = true;
        } else {
            $scope.dis = true;
        }
    };
    function setImage(tile) {
        if(tile >= 12)
                tile = tile - 12;
        for (var i = 0; i < 12; i++) {
            gameData.tiles[i].display = false;
            if(i == tile && gameData.tiles[i].pass) {
                tile += 1;
            } 
            if(tile >= 12)
                tile = tile - 12;
        };
        for(var i = 11; i >= 0; i--) {
            if(i == tile && gameData.tiles[i].pass) {
                tile += 1;
            } 
            if(tile >= 12)
                tile = tile - 12;
        }
        gameData.tiles[tile].display = true;
        gameData.tiles[tile].pass = true;
        gameData.currentSpace = tile;
        $scope.tiles = gameData.tiles;
        $scope.dis = false;
    };
    $scope.proceed = function() {
        var choice = Math.floor((Math.random()*2)+1);
        if(choice == 1) {
            $location.url("/game")
        } else if(choice == 2) {
            $location.url("/table")
        } else if(choice == 4) {
            $location.url("/exercise");
        }
        $scope.dis = true;
    }
});