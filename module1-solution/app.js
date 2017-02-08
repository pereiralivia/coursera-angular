(function(){
'use strict'

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
$scope.message = "";
$scope.list = "";

$scope.checkLunch = function(){

  var elem = document.getElementById('messageColor');

  function changeMessageColorToGreen(){
    elem.setAttribute("class", "messageGreen");
  }
  function changeMessageColorToRed(){
    elem.setAttribute("class", "messageRed");
  }

  var listArray = $scope.list.trim().split(",").filter(function(entry) { return entry.trim() != ''; });

  switch (listArray.length) {
      case 0:
          changeMessageColorToRed();
          $scope.message = "Please enter data first";
          break;
      case 1:
          changeMessageColorToGreen();
          $scope.message = "Enjoy!";
          break;
      case 2:
          changeMessageColorToGreen();
          $scope.message = "Enjoy!";
          break;
      case 3:
          changeMessageColorToGreen();
          $scope.message = "Enjoy!";
          break;
      default:
      changeMessageColorToGreen();
      $scope.message = "Too much!";
    }
}

}
})();
