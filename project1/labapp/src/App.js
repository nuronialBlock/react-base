import React, { Component } from 'react';
import './App.css';

function FormattedDate(props) {
  return (
    <h2>Time is {props.date.toLocaleTimeString()}.</h2>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timeID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillMount() {
    clearInterval(this.timeID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello my mate!!!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
};
