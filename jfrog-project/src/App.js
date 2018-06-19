import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PopularJar from './PopularJar'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <PopularJar />
      </div>
    );
  }
}

export default App;
