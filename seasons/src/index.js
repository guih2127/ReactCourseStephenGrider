import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends Component {

  state = { latitude : null, errorMessage: ''};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }

    return <Spinner text="Waiting for your permission..." />;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }

}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);