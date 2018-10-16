import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './containers/form';
import Activities from './containers/activities';

class App extends Component {

  state = {
    athlete: {},
    showLogin: true
  }

  componentDidMount() {
    fetch('http://localhost:3000/athletes')
    .then(result => result.json())
    .then(data => this.setState({
      athlete: data
    }))
  }

  showLogin() {
    this.setState({
      showLogin: false
    })
  }

  fullName() {
    this.state.athlete.firstname
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.athlete).length > 0 ? <h1>{this.state.athlete.firstname + " " +this.state.athlete.lastname}</h1> : null}
        { this.state.showLogin ? <Form showLogin={this.showLogin.bind(this)} /> : null}
        { this.state.showLogin === false ? <Activities /> : null}
      </div>
    );
  }
}

export default App;
