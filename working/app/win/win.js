angular.module('app.win', [])
    .controller('winCtrl',  function($scope, $http){
        $scope.getTrivia = function() {
            $http.get("/win").then(function(result) {
                $scope.trivia = result.data.number + ": " + result.data.text;
            })
        }
    })