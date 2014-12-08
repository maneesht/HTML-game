angular.module('app.gameBoard', [])
    .controller('boardCtrl',  function($scope, $location, $http){
    $scope.display="Roll Dice";
    $scope.dis = true;
    $scope.total = {};
    $scope.total.score = parseInt(localStorage.getItem('points')) || 0;
    console.log(parseInt(localStorage.getItem('points')))
    var currentSpace = parseInt(localStorage.getItem('currentSpace'));
    var inMiddleOfMove = (localStorage.getItem('inMiddleOfMove'));
    $scope.tiles = localStorage.getItem('tiles');
   if(inMiddleOfMove === "true") {
        $scope.disableDice = true;
    } else {
        $scope.disableDice = false;
    }
    /*$scope.tiles = gameData.tiles;*/
    if($scope.tiles.length <= 1) {
        for (var i = 11; i >= 0; i--) {
            $scope.tiles[i] = {
                display: false
            };
        }
    }
    $scope.tiles = ($scope.tiles[0]);
    console.log($scope.tiles.length);
    $scope.rollDice = function() {
       var done = _.filter($scope.tiles, "pass").length == 12 ? true : false;
        
        /*localStorage.setItem('points', points+=2);
        $scope.total.score = localStorage.getItem('points');*/
        if(inMiddleOfMove === "false" && !done) {
            var points =  localStorage.getItem('points');
            //localStorage.setItem('points', points+=points);
            $scope.option=Math.floor((Math.random()*3)+1);
            $scope.display=$scope.option;
            localStorage.setItem('currentSpace', $scope.option + currentSpace);
            setImage($scope.option + currentSpace);
            localStorage.setItem("inMiddleOfMove", true);
            inMiddleOfMove = true;
            $scope.disableDice = true;
        } else {
            $scope.dis = true;
        }
        if(done) {
            $location.url("/win");
        }
    };
    function setImage(tile) {

        var points =  localStorage.getItem('points');
        if(tile >= 12)
                tile = tile - 12;
        for (var i = 0; i < 12; i++) {
            $scope.tiles[i].display = false;
        };
        if(tile == 0)
            points +=3;
        localStorage.setItem('points', points);
        $scope.total.points = points;
        var tiles = localStorage.getItem('tiles'); 
        $scope.tiles[tile].display = true;
        $scope.tiles[tile].pass = true;
        var currentSpace = tile;
        localStorage.setItem("currentSpace", tile);
        localStorage.setItem("tiles", $scope.tiles);
        $scope.dis = false;
        console.log($scope.tiles);
    };
    $scope.proceed = function() {
        var choice = Math.floor((Math.random()*5)+1);
        if(choice == 1) {
            $location.url("/game");
        } else if(choice == 2) {
            $location.url("/table");
        } else if(choice == 3) {
            $location.url("/fillColor");
        } else if(choice == 4) {
            $location.url("/exercise");
        } else if(choice == 5) {
            $location.url("/textAlign");
        }
        $scope.dis = true;
    }
});