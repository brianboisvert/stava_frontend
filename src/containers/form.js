import React from 'react';
var strava = require('strava-v3');

class Form extends React.Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.showLogin();
  }

  render() {
    return (
      <div>
        <form>
          <input type="image" src="btn_strava_connectwith_orange.png" name="submit" onClick={this.handleClick} />
        </form>
      </div>

    )
  }
}

export default Form;
