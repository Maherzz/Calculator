
var Calculator = function(){}

Calculator.prototype = {

  add: function(n1, n2){
    var result = ((n1 * 1000) + (n2 * 1000)) / 1000;
    return result
  },

  subtract: function(n1, n2){
    return n2 - n1
  },

  multiply: function(n1, n2){
    return n1 * n2
  },

  devide: function(n1, n2){
    return n1 / n2
  }

}

module.exports = Calculator;