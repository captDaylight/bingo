import React, { Component } from 'react'

const rows = [ 'A', 'B', 'C' ]
const columns = [ '1', '2', '3' ]

const Board = ({ selectSquare, rowAndColumn, purchasedSquares }) => (
  <div>
    {rows.map((r, ridx) => {
      return <ul className="bingo-row" key={`${r}-${ridx}`}>
        {columns.map((c, cidx) => {
          const squareLocation = (ridx * 3) + cidx
          const isPurchased = purchasedSquares.includes(squareLocation)

          return <li className="bingo-column" key={`${c}-${cidx}`}>
            <div
              className={`
                bingo-item
                ${`${r}-${c}` === rowAndColumn ? 'selected' : ''}
                ${isPurchased ? 'previously-purchased' : ''}
                `}
              onClick={() => selectSquare(`${r}-${c}`, squareLocation) }
            >
              <div className="bingo-text">{r} {c}</div>
            </div>
          </li>
        })}
      </ul>
    })}
  </div>
)

export default Board
