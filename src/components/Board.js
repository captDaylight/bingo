import React, { Component } from 'react'

const rows = [ 'A', 'B', 'C' ]
const columns = [ '1', '2', '3' ]

class Board extends Component {
  render() {
    const { selectSquare, rowAndColumn } = this.props

    return (
      <div>
        {rows.map((r, i) => {
          return <ul className="bingo-row" key={`${r}-${i}`}>
            {columns.map((c, i) => {
              return <li className="bingo-column" key={`${c}-${i}`}>
                <div
                  className={`bingo-item ${`${r}-${c}` === rowAndColumn ? 'selected' : ''}`}
                  onClick={() => selectSquare(`${r}-${c}`) }
                >
                  <div className="bingo-text">{r} {c}</div>
                </div>
              </li>
            })}
          </ul>
        })}
      </div>
    )
  }
}

export default Board
