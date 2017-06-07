import React, { Component } from 'react'
import Board from './components/Board'

class Bingo extends Component {
  constructor() {
    super()

    this.state = {
      rowAndColumn: ''
    }

    this.selectSquare = this.selectSquare.bind(this)
  }

  selectSquare(_rowAndColumn) {
    console.log('selecting square', _rowAndColumn);
    const { rowAndColumn } = this.state

    if (rowAndColumn === _rowAndColumn) {
      return this.setState({ rowAndColumn: '' })
    }

    this.setState({ rowAndColumn: _rowAndColumn })
  }

  render() {
    const { rowAndColumn } = this.state

    return (
      <div>
        <header>
          <h1 className="header">CHICKEN SHIT BINGO</h1>
          <p>Select a square to get started</p>
        </header>

        <Board rowAndColumn={rowAndColumn} selectSquare={this.selectSquare} />
      </div>
    )
  }
}

export default Bingo
