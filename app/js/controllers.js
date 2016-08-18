trig.controller("TrigController", function($scope, CalculatorFactory){
  $scope.hypotenuse;
  $scope.calculate = function(sideA, sideB){
    $scope.hypotenuse = CalculatorFactory.calculate(sideA, sideB)
    return $scope.hypotenuse;
  }

});
