import React from 'react';
import './board.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectCell, setWinner } from '../../store/actions/moves';

const selectBoard = (state) => state.board
const selectGame = (state) => state.game


export const Board = () => {
  const board = useSelector(selectBoard)
  const game = useSelector(selectGame)
  const dispatch = useDispatch()

  const getCurrentPlayer =(cell)=>{
    return(cell==='X' ? 'PlayerX' : 'PlayerO')
  }

  const checkWinner =(rowIndex, cellIndex)=>{
    let winner = null;
    const player = game.currentPlayer;
    let brd = board;
    brd[rowIndex][cellIndex] = player
    const row = brd[rowIndex];
    const col = brd.map(x => x[cellIndex]);
    const diag1 = brd.map((x, indx) => x[indx]);
    const diag2 = brd.reverse().map((x, indx) => x[indx]);
    if(
      row.every(el => el === player) || 
      col.every(el => el === player) || 
      diag1.every(el => el === player) || 
      diag2.every(el => el === player)
      ){
      winner = game.currentPlayer;
    }else if(!row.includes(null) && !col.includes(null) && !diag1.includes(null) && !diag2.includes(null)){
        winner = 'DRAW'
    }
    return winner
  }
  const clickCell = (rowIndex, cellIndex)=> {
      dispatch(
        selectCell(
          game.currentPlayer,
          rowIndex,
          cellIndex,
        )
      )
      dispatch(
        setWinner(
          checkWinner(rowIndex, cellIndex)
        )
      )
      
  }

  return (
    <div className="Board">
      <h2>Syft Tic-Tac-Toe</h2>
      <div className="GridWrapper">
        <div className="Grid">
          {
            board.map((row, rowIndex)=>(
              row.map((cell, cellIndex)=>
                <div 
                  key={cellIndex} 
                  className={`Cell ${getCurrentPlayer(cell)} ${(cell === null && game.winner === null) && 'CellActive'}`}
                  onClick={()=>{(cell === null && game.winner === null) && clickCell(rowIndex, cellIndex)}}> 
                  {cell}
                </div>)
            ))
          }
        </div>
      </div>
      {game.winner === null ? 
        <h2>Next move: 
          <span className={getCurrentPlayer(game.currentPlayer)}> {game.currentPlayer}</span>
        </h2>
      : 
        <h2>Winner: 
          <span className={getCurrentPlayer(game.winner)}> {game.winner}</span>
        </h2>
      }
      
    </div>
  )
}
