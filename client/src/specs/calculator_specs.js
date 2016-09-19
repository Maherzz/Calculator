var Calculator = require('../models/Calculator')
var assert = require('chai').assert


describe("Calculator Tests", function(){

  beforeEach(function(){
    calculator = new Calculator()
  })

  it('Test setup', function(){
    assert.equal(true, true)
  })

  it('Can add two numbers and return correct result', function(){
    var result = calculator.add(3,7)
    assert.equal(result, 10)
  })

  it('Can subtract two numbers and return correct result', function(){
    var result = calculator.subtract(3, 10)
    assert.equal(result, 7)
  })

  it('Can multiply two numbers and return correct result', function(){
    var result = calculator.multiply(5, 5)
    assert.equal(result, 25)
  })

  // it('Can devide two numbers and return correct result', function(){

  // })


})