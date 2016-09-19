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

  it('Can add two 0.1 and 0.2 and fix floating point problem', function(){
    var result = calculator.add(0.1,0.2)
    assert.equal(result, 0.3)
  })

  it('Can subtract two numbers and return correct result', function(){
    var result = calculator.subtract(3, 10)
    assert.equal(result, 7)
  })

  it('Can multiply two numbers and return correct result', function(){
    var result = calculator.multiply(5, 5)
    assert.equal(result, 25)
  })

  it('Can devide two numbers and return correct result', function(){
    var result = calculator.divide(10, 2)
    assert.equal(result, 5)
  })

  it('Can add two decimal numbers', function(){
    var result = calculator.add(1.2, 1.3)
    assert.equal(result, 2.5)
  })

  it('Can add two decimal numbers two 3 decimals places', function(){
    var result = calculator.add(0.015, 5.185)
    assert.equal(result, 5.2)
  })


  it('Can subtract two decimal numbers', function(){
    var result = calculator.subtract(1.1, 1.5)
    assert.equal(result, 0.4)
  })

  it('Can subtract two decimal numbers two 3 decimals places', function(){
    var result = calculator.subtract(0.185, 5.185)
    assert.equal(result, 5)
  })

  it('Can multiply two decimal numbers', function(){
    var result = calculator.multiply(1.1, 1.5)
    assert.equal(result, 1.65)
  })

  it('Can multiply two decimal numbers two 3 decimals places', function(){
    var result = calculator.multiply(0.005, 2.005)
    assert.equal(result, 0.010025)
  })

  it('Can multiply two decimal numbers', function(){
    var result = calculator.divide(2.5, 2.05)
    assert.equal(result.toFixed(8), 1.2195122)
  })

  it('Can multiply two decimal numbers two 3 decimals places', function(){
    var result = calculator.divide(0.005, 2.005)
    assert.equal(result.toFixed(8), 0.00249377)
  })

  it('Can take an operator as an argument to add', function(){
    var result = calculator.calc(10, 10, "+")
    assert.equal(result, 20)
  })




})