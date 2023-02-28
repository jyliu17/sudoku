import React, { useState } from 'react';
import Cell from './Cell';

const Board = ({isInputValid, solveSudoku}) => {

  const [boardState, setBoardState] = useState([
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0]
  ]);
  
  const handleChange = (event, rowIndex, columnIndex) => {
      const newValue = parseInt(event.target.value);
      const newBoardState = [...boardState];
      newBoardState[rowIndex][columnIndex] = newValue;
      setBoardState(newBoardState);
      isInputValid(newBoardState,rowIndex, columnIndex, newValue)
      
      let solution = solveSudoku(boardState, 0, 0)
      // console.log(solution)
      if (newBoardState === solution) {
        alert("Puzzle Solved!")
      }
  }

  // const solve = () => {
  //   console.log(boardState)
  //   solveSudoku(boardState, 0, 0)
  // }

  const reset = () => {
    const restart = [
      [0, 0, 0, 2, 6, 0, 7, 0, 1],
      [6, 8, 0, 0, 7, 0, 0, 9, 0],
      [1, 9, 0, 0, 0, 4, 5, 0, 0],
      [8, 2, 0, 1, 0, 0, 0, 4, 0],
      [0, 0, 4, 6, 0, 2, 9, 0, 0],
      [0, 5, 0, 0, 0, 3, 0, 2, 8],
      [0, 0, 9, 3, 0, 0, 0, 7, 4],
      [0, 4, 0, 0, 5, 0, 0, 3, 6],
      [7, 0, 3, 0, 1, 8, 0, 0, 0]
    ]
    setBoardState(restart)
  }
  // Render the board
  return (
    <div className="board">
      {boardState.map((row, rowIndex) => (
        <div className="board-row" key={rowIndex}>
          {row.map((cell, columnIndex) => (
            <Cell
              key={`${rowIndex}-${columnIndex}`}
              value={cell}
              readOnly={cell !== 0}
              onChange={(e) => handleChange(e, rowIndex, columnIndex)}
            />
          ))}
        </div>
        
      ))}
      {/* <button onClick={solve}>
                Solve
      </button> */}
      <span> </span>
      <button onClick={isInputValid}>
                Check
      </button>
      <button onClick={reset}>
                Reset
      </button>
    </div>
  );
};

export default Board;