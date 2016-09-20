var React = require('react')
var Calculator = require('../models/Calculator')

var CalculatorBox = React.createClass({


  getInitialState: function(){
    return {
      display: "0"
    }
  },

  calculate: function(){
    var calculator = new Calculator()
    var result = calculator.calcInput(this.state.display)
    this.setState({display: result})
  },

  HandleInputClick: function(event){
    var calculator = new Calculator()
    var value = event.target.value
    var display = this.state.display

    if(display === "0" && value !== "."){display = ""}

    if(calculator.isAnOperator(value)){
      display = display + " " + value + " "
    }else{
      display = display + value 
    }
    this.setState({display: display})
  },

  covertToPercent: function(){
    var calculator = new Calculator()
    var display = calculator.convertPercentage(this.state.display)
    this.setState({display: display})
  },

  reverseNegative: function(event){
    this.resetInvalidInput()
    var display = this.state.display
    var splitValue = display.split("")
    if(splitValue[0] === "-"){
      splitValue.splice(0, 1)
    }else{
      splitValue.unshift("-")
    }
    var newDisplay = this.joinArray(splitValue)
    console.log(newDisplay)
    this.setState({display: newDisplay}) 
  },

  joinArray: function(array){
    var result = ""
    for(var element of array){
      if(element !== ","){
        result = result + element
      }
    }
    return result
  },

  clearInput: function(){
    this.setState({display: "0"})
  },

  render: function(){
    return(
      <div className="row">

        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 calculator-container">

            <div className="row">
              <div className="col-12">
                <input type="text" className="number-display" value={this.state.display} readOnly/>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <button value="C" className="calc-button operator" onClick={this.clearInput}>C</button>
              </div>
              <div className="col-3">
                <button value="+/-" className="calc-button operator" onClick={this.reverseNegative}>+/-</button>
              </div>
              <div className="col-3">
                <button value="%" className="calc-button operator" onClick={this.covertToPercent}>%</button>
              </div>
              <div className="col-3">
                <button value="/" className="calc-button operator" onClick={this.HandleInputClick}>/</button>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <button value="7" className="calc-button number" onClick={this.HandleInputClick}>7</button>
              </div>
              <div className="col-3">
                <button value="8" className="calc-button number" onClick={this.HandleInputClick}>8</button>
              </div>
              <div className="col-3">
                <button value="9" className="calc-button number" onClick={this.HandleInputClick}>9</button>
              </div>
              <div className="col-3">
                <button value="x" className="calc-button operator" onClick={this.HandleInputClick}>X</button>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <button value="4" className="calc-button number" onClick={this.HandleInputClick}>4</button>
              </div>
              <div className="col-3">
                <button value="5" className="calc-button number" onClick={this.HandleInputClick}>5</button>
              </div>
              <div className="col-3">
                <button value="6" className="calc-button number" onClick={this.HandleInputClick}>6</button>
              </div>
              <div className="col-3">
                <button value="-" className="calc-button operator" onClick={this.HandleInputClick}>-</button>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <button value="1" className="calc-button number" onClick={this.HandleInputClick}>1</button>
              </div>
              <div className="col-3">
                <button value="2" className="calc-button number" onClick={this.HandleInputClick}>2</button>
              </div>
              <div className="col-3">
                <button value="3" className="calc-button number" onClick={this.HandleInputClick}>3</button>
              </div>
              <div className="col-3">
                <button value="+" className="calc-button operator" onClick={this.HandleInputClick}>+</button>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <button value="0" className="calc-zero-button number" onClick={this.HandleInputClick}>0</button>
              </div>
              <div className="col-3">
                <button value="." className="calc-button number" onClick={this.HandleInputClick}>.</button>
              </div>
              <div className="col-3">
                <button value="=" className="calc-button operator" onClick={this.calculate}>=</button>
              </div>
            </div>

          </div>
          <div className="col-4"></div>
        </div>

      </div>

    )}

  })

module.exports = CalculatorBox;