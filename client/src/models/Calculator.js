
var Calculator = function(){}

Calculator.prototype = {

  add: function(n1, n2){
    return n1 + n2
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