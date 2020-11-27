import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    boardConstruct(board);
    document.title = 'Pong remastered'
  }, []);

  const board = [
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '0####################################################################5',
    '1####################################################################6',
    '2####################################################################7',
    '3####################################################################8',
    '4####################################################################9',
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '######################################################################',
    '######################################################################',
  ];

  const boardConstruct = () => {
    let appcontainer = document.querySelector(".App");
    for (let iterateY = 0; iterateY < board.length; iterateY++) {
      let newBoardLine = document.createElement('div');
      newBoardLine.classList.add('board-line');
      for (let iterateX = 0; iterateX < board[iterateY].length; iterateX++) {
        // ============ CELL CONSTRUCTOR ============
        let newBoardCell = document.createElement('div');
        newBoardCell.classList.add('board-cell');
        newBoardCell.dataset.x = iterateX;
        newBoardCell.dataset.y = iterateY;

        // Players constructor
        let tileType = board[iterateY][iterateX];
        switch(tileType) {
          case '0':
            newBoardCell.classList.add('1P-upper');
            newBoardCell.classList.add('player');
            break;
          case '1':
            newBoardCell.classList.add('1P-upmid');
            newBoardCell.classList.add('player');
            break;
          case '2':
            newBoardCell.classList.add('1P-mid');
            newBoardCell.classList.add('player');
            break;
          case '3':
            newBoardCell.classList.add('1P-downmid');
            newBoardCell.classList.add('player');
            break;
          case '4':
            newBoardCell.classList.add('1P-downer');
            newBoardCell.classList.add('player');
            break;
          case '5':
            newBoardCell.classList.add('2P-upper');
            newBoardCell.classList.add('player');
            break;
          case '6':
            newBoardCell.classList.add('2P-upmid');
            newBoardCell.classList.add('player');
            break;
          case '7':
            newBoardCell.classList.add('2P-mid');
            newBoardCell.classList.add('player');
            break;
          case '8':
            newBoardCell.classList.add('2P-downmid');
            newBoardCell.classList.add('player');
            break;
          case '9':
            newBoardCell.classList.add('2P-downer');
            newBoardCell.classList.add('player');
            break;
          default:
            break;
        }

        // ============ CELL CONSTRUCTOR ============
        newBoardLine.appendChild(newBoardCell);
      }
      appcontainer.appendChild(newBoardLine);
    }
  }

  return (
    <div className="App">
      Pong remastered
    </div>
  );
}

export default App;
