angular.module('app.table', [])
    .controller('tableCtrl',  function($scope, $location){
        $scope.status = {};
        $scope.score = 3;
        $scope.status.view = "instructions";
        $scope.htmlObj = {};
        $scope.rowsNeeded = getRandom(), $scope.columnsNeeded = getRandom();
        $scope.htmlObj.html = "";
        $scope.$watch('htmlObj.html', function() {
            $("#container").empty();
            $("#container").append($scope.htmlObj.html);
            $("table").css("table-layout", "fixed");
            $("table").css("border", "1px solid black");
            $("table td").css("border", "1px solid black");
            $("table").css("padding", "10px");
            $("table").css("width", "50%");
            $("table").css("height", "50%");
        })
        $scope.compile = function() {
            if($scope.htmlObj.html && validate()){
                alert("You SHALL PASS!");
                var points =  parseInt(localStorage.getItem('points'));
                localStorage.setItem('points', points + $scope.score);
                points =  parseInt(localStorage.getItem('points'));
                console.log(points);
                localStorage.setItem("inMiddleOfMove", false);
                $location.url("/gameBoard");
            }
            else
                $scope.error = true;
        }
        $scope.askForHint = function() {
            $scope.score = 1;
            $scope.hint = true;
        }
        function validate() {
            var rows = $('table').find("tr");
            var numOfRows = rows.length;
            if($scope.rowsNeeded !== numOfRows)
                return false
            for(var i = 0; i < numOfRows; i++) {
                var numOfColumns = rows.eq(i).find('td').length;
                if(numOfColumns !== $scope.columnsNeeded)
                    return false;
            }
            return true;
        }
        function getRandom () {
            return Math.floor((Math.random()*8)+2);
        }
    })