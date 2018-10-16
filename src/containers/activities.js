import React from 'react';
import Barchart from './barchart.js';

class Activities extends React.Component {

  state = {
    activities: [],
    mileageCategories: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/activities')
    .then(result => result.json())
    .then(data => this.weeklyMileage(data))
  }

  weeklyMileage(activities) {
    let distances = [0, 0, 0, 0];

    activities.map((activity) => {
      let distance = activity["distance"] / 1609.344

      switch(true) {
        case (distance <= 4):
          distances[0] += 1;
          break;
        case (distance <= 7):
          distances[1] += 1;
          break;
        case (distance <= 10):
          distances[2] += 1;
          break;
        case (distance <= 21):
          distances[3] += 1;
          break;
      }

    })

    this.setState({
      activities: activities,
      mileageCategories: distances
    })
  }

  mileageData = () => {
    let mileageCategories = this.state.mileageCategories

    let data =  {
    labels: ["0-4", "5-7", "8-10", "10-20"],
    datasets: [{
        label: "Weekly Mileage",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: mileageCategories
      }]
    };
    return data
  }

  render() {

    return(
      <div>
        { this.state.mileageCategories.length > 0 ? <Barchart mileageData={this.mileageData()} /> : null }
      </div>
    )
  }
}

export default Activities;
