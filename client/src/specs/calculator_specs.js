var Product = require('../models/Calculator')
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


})