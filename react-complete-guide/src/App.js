import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Sabrina', age: 29},
      {name: 'Jeroen', age: 42},
      {name: 'Amalia', age: 2}
    ],
    otherState: 'Some other value'
  }

  switchNameHandler = () => {
    // console.log("Was clicked!");
    this.setState( {
      persons: [
      {name: 'Dillie', age: 29},
      {name: 'Jay', age: 42},
      {name: 'Grace', age: 2}
    ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
