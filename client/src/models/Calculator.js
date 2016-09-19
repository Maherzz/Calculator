
var Calculator = function(){}

Calculator.prototype = {

  add: function(n1, n2){
    return n1 + n2
  },

  subtract: function(n1, n2){
    return n1 - n2
  }

}

module.exports = Calculator;