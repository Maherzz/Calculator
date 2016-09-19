var React = require('react')

var CalculatorBox = React.createClass({


  getInitialState: function(){
    return {
      firstArg: null,
      secondArg: null,
      operator: null
    }
  },

  render: function(){
    return(
      <div className="row">
        <h1>Calculator</h1>
      </div>

      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">

          <div className="row">

          </div>

          <div className="row">
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
          </div>

          <div className="row">
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
          </div>

          <div className="row">
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
          </div>

          <div className="row">
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
          </div>

          <div className="row">
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
          </div>

        </div>
        <div className="col-3"></div>
      </div>

    )}

  })

module.exports = CalculatorBox;