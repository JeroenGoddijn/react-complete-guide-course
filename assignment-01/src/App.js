import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
   username: 'Captain Dingeling'
  }

  usernameChangedHandler = (event) => {
    this.setState( {
      username: event.target.value
    } );
  }

  render () {
    return (
      <div className="App">
          <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username} />
          <UserOutput userName={this.state.username} />
          <UserOutput userName={this.state.username} />
          <UserOutput userName="Sergeant Dipstick" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
