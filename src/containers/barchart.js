import React from 'react';
var BarChart = require("react-chartjs").Bar;

class Barchart extends React.Component{

  render() {
    console.log(this.props.mileageData);
    return(
      <div>
        <BarChart data={this.props.mileageData} />
      </div>
    )
  }
}

export default Barchart;
