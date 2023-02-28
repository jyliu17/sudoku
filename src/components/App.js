import React from "react";
import Board from "./Board";



const App = () => {

    // Check if a row is valid
    const isRowValid = (board, row, value) => {
        for (let i = 0; i < 9; i++) {
            // console.log(row)
            // console.log(i)
            if (board[row][i] === value) {
                alert("Duplicate in row")
                return false;
            }
        }
        return true;
    };
  
    // Check if a column is valid
    const isColumnValid = (board, column, value) => {
        for (let i = 0; i < 9; i++) {
            if (board[i][column] === value) {
                alert("Duplicate in column")
                return false;
            }
        }
        return true;
    };
  
    // Check if a sub-box is valid
    const isSubBoxValid = (board, row, column, value) => {
        let startRow = row - (row % 3);
        let startCol = column - (column % 3);
  
        for (let i = 0; i <  3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i + startRow][j + startCol] === value) {
                    alert("Duplicate in sub box")
                    return false;
                }
            }
        }
        return true;
    };
  
    // Check if the user input adheres to the rules of Sudoku
    const isInputValid = (board, row, column, value) => {
        return isRowValid(board, row, value) && 
               isColumnValid(board, column, value) && 
               isSubBoxValid(board, row, column, value);
    };

    //solving sudoku using algorith
    const solveSudoku = (board, row, column) => {
        if (row === 9 - 1 && column === 9) return board;
        if (column === 9) {
            row++;
            column = 0;
        }
        if (board[row][column] !== 0) return solveSudoku(board, row, column+1);

        for (let num = 1; num < 10; num++) {
            if (isSafe(board, row, column, num)) {
                board[row][column] = num;
                if (solveSudoku(board, row, column + 1)) return board;
            }
            board[row][column] = 0;
        }
        return false;
    }

    const isSafe = (board, row, column, num) => {
        for (let x = 0; x <= 8; x++) {
            if (board[row][x] === num) return false;
        }
        for (let x = 0; x <= 8; x++) {
            if (board[x][column] === num) return false;
        }
        let startRow = row - (row % 3);
        let startCol = column - (column % 3);

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i + startRow][j + startCol] === num) return false;
            }
        }
        return board;
    }
  
    return (
        
        <main>
            <div className="App">
                <h1>Sudoku</h1>
             </div>
            <Board 
                //    isRowValid={isRowValid}
                //    isColumnValid={isColumnValid}
                //    isSubBoxValid={isSubBoxValid}
                   isInputValid={isInputValid}
                   solveSudoku={solveSudoku}
                   isSafe={isSafe}>
            </Board>
        </main>
        
    )
}

export default App;