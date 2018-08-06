import React, { Component } from 'react'
// import styled from 'styled-components'
import logo from './logo.svg'
import './App.css'
import AuctionData from '../components/auctionData'

class App extends Component {
  state = {
    data: {}
  }

  handleRequest = async () => {
    try {
      const res = await fetch('/api/getData')
      const data = await res.json()
      this.setState({ data: data.data })
    } catch (e) {
      console.log(e)
    }
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        <p className='App-intro'>
          <button onClick={this.handleRequest}>Hit for request</button>
        </p>

        <AuctionData
          realms={this.state.data.realms}
          auctions={this.state.data.auctions}
        />
      </div>
    )
  }
}

export default App
