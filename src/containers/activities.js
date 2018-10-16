import React from 'react';
import Barchart from './barchart.js';

var BarChart = require("react-chartjs").Bar;

class Activities extends React.Component {

  state = {
    activities: [],
    mileageCategories: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/activities')
    .then(result => result.json())
    .then(data => this.setState({
      activities: data
    }, this.weeklyMileage(data)))
  }

  weeklyMileage(data) {
console.log(data);
    // this.setState({
    //   mileageCategories: this.state.activities
    // })
  }

  render() {
    // console.log(this.state.activities);
  //   var data = {
  //   labels: ["0-4", "5-7", "8-10", "10-20"],
  //   datasets: [
  //     {
  //       label: "Weekly Mileage",
  //       fillColor: "rgba(220,220,220,0.5)",
  //       strokeColor: "rgba(220,220,220,0.8)",
  //       highlightFill: "rgba(220,220,220,0.75)",
  //       highlightStroke: "rgba(220,220,220,1)",
  //       data: [65, 59, 80, 81]
  //     }
  //   ]
  // };

    return(
      <div>
        <Barchart />
      </div>
    )
  }
}

export default Activities;
