
var Calculator = function(){}

Calculator.prototype = {

  add: function(n1, n2){
    var result = ((n1 * 1000) + (n2 * 1000)) / 1000;
    return result
  },

  subtract: function(n1, n2){
    var result = ((n2 * 1000) - (n1 * 1000)) / 1000;
    return result
  },

  multiply: function(n1, n2){
    var result = ((n1 * 1000) * (n2 * 1000)) / 1000000;
    return result
  },

  divide: function(n1, n2){
    var result = n1 / n2;
    return result
  }

}

module.exports = Calculator;