import React, { Component } from 'react'
import Board from './components/Board'

import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'
import chickenshitbingo_artifacts from '../build/contracts/ChickenShitBingo.json'
var ChickenShitBingo = contract(chickenshitbingo_artifacts)

class Bingo extends Component {
  constructor() {
    super()

    ChickenShitBingo.setProvider(web3.currentProvider)

    this.state = {
      rowAndColumn: '',
      squareLocation: -1,
      account: '',
      purchased: false,
      purchasedSquares: [],
    }

    this.selectSquare = this.selectSquare.bind(this)
    this.confirmSquare = this.confirmSquare.bind(this)
  }

  componentWillMount() {
    web3.eth.getAccounts((err, accounts) => {
      if (err != null) {
        alert('There was an error fetching your accounts.')
        return
      }

      if (accounts.length == 0) {
        alert('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.')
        return
      }

      this.setState({ account: accounts[0] })

      ChickenShitBingo.deployed().then((instance) =>  {
        return instance.getPurchasedSquares(1)
      }).then((squares) => {
        this.setState({ purchasedSquares: squares.map(s => s.c[0]) })
      })
    });
  }

  selectSquare(_rowAndColumn, _squareLocation) {
    const { rowAndColumn } = this.state

    if (rowAndColumn === _rowAndColumn) {
      return this.setState({ rowAndColumn: '', squareLocation: -1 })
    }

    this.setState({
      rowAndColumn: _rowAndColumn,
      squareLocation: _squareLocation,
    })
  }

  confirmSquare() {
    const { squareLocation, account } = this.state

    ChickenShitBingo.deployed().then((instance) =>  {
      return instance.purchaseSquare(1, squareLocation, {from: account, value: 10000000})
    }).then((a) => {
      this.setState({ purchased: true })
    }).catch((e) => {
      console.log(e)
      self.setStatus('Error sending coin; see log.')
    });
  }

  renderInstructions(rowAndColumn) {
    return rowAndColumn.length === 0
      ? <p>Select a square</p>
      : <p>
        Purchase {rowAndColumn}?
        <span className="confirm" onClick={this.confirmSquare}>YES</span>
        <span className="confirm" onClick={() => this.selectSquare('')}>NO</span>
      </p>
  }

  render() {
    const { rowAndColumn, purchased, purchasedSquares } = this.state

    return (
      <div>
        <header>
          <h1 className="header">CHICKEN SHIT BINGO</h1>
          { purchased
            ? <p>Congrats! You have purchased square {rowAndColumn}</p>
            : this.renderInstructions(rowAndColumn)
          }
        </header>

        <Board
          rowAndColumn={rowAndColumn}
          selectSquare={this.selectSquare}
          purchasedSquares={purchasedSquares}
        />
      </div>
    )
  }
}

export default Bingo
