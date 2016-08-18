trig.factory("CalculatorFactory", function(){

return {
    calculate : function(inputA, inputB){
    var a2 = Number(inputA * inputA)
    var b2 = Number(inputB * inputB);
    var c2 = (Number(a2)+ Number(b2));

    return Math.sqrt(c2);
  }
}



})
