
var Calculator = function(){}

Calculator.prototype = {

  calcInput: function(input){
    var splitInput = input.split(" ")
    if(this.isInvalidInput(splitInput)){return "Invalid input"}
    var newArray = splitInput
    while(splitInput.length > 1){
      for(var i = 0; i < newArray.length; i++){
        if(this.isAnOperator(newArray[i])){
          splitInput[i] = this.calc(splitInput[i - 1], splitInput[i + 1], splitInput[i])
          splitInput.splice(i -1, 1)
          splitInput.splice(i, 1)
          break
        }
      }
      var newArray = splitInput
    }
    return splitInput[0]
  },

  isInvalidInput: function(inputArray){
    for(var i = 0; i < inputArray.length; i++){
      if(this.isAnOperator(inputArray[i])){
        if(isNaN(inputArray[i-1]) || isNaN(inputArray[i+1])){
          return true
        }
      }
    }
    return false
  },

  isAnOperator: function(operator){
    if(operator === "+" || operator === "-" || operator === "*" || operator === "/"){
      return true
    }
    return false
  },

  calc: function(n1, n2, operator){
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    // console.log("Calc:",n1, n2, operator)
    var result = "Invalid operator"
    switch(operator) {
        case "+":
            result = this.add(n1, n2)
            break;
        case "-":
            result = this.subtract(n1, n2)
            break;
        case "*":
            result = this.multiply(n1, n2)
            break;
        case "/":
            result = this.divide(n1, n2)   
    }
    return result
  },

  add: function(n1, n2){
    var result = ((n1 * 1000) + (n2 * 1000)) / 1000;
    return result
  },

  subtract: function(n1, n2){
    var result = ((n1 * 1000) - (n2 * 1000)) / 1000;
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