import React, { Component } from 'react'
import './App.css'

import Header from './components/common/Header'

class App extends Component {
  render() {
    return (
      <div className="app">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <Header />
      </div>
    );
  }
}

export default App;
