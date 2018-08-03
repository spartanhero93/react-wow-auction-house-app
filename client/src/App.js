import React, { Component } from 'react'
import axios from 'axios'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    data: {}
  }

  handleRequest = async () => {
    const res = await axios.get('/getData')
    console.log(res.data)
  }

  render () {
    console.log(this.state.data)
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          <button onClick={this.handleRequest}>Hit for request</button>
        </p>
      </div>
    )
  }
}

export default App
