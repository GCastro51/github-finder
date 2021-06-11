import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

// turned function component to Class Component (old style, functions can be used with hooks)
class App extends Component {

  foo = () => 'Bars';

  // life-cycle method - required render 
  render() {

    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="container">
          <Users></Users>
        </div>
      </div>
    );
  }
  
}

export default App;
