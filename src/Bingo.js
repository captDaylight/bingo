import React, { Component } from 'react'
import Board from './components/Board'

class Bingo extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="header">CHICKEN SHIT BINGO</h1>
          <p>Select a square to get started</p>
        </header>

        <Board />
      </div>
    )
  }
}

export default Bingo
