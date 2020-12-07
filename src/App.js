// ========== BASE DEPENDENCIES ==========

import React, { useEffect } from 'react';
import './App.css';

// ========== GAME FUNCTIONS ==========
import boardConstruct from './assets/functions/boardconstruct';
import readyListeners from './assets/functions/readyListeners';

// ========== DATA ==========
import board from './assets/data/board';

function App() {

  useEffect(() => {
    boardConstruct(board);
    readyListeners();
    document.title = 'Pong remastered';
  }, []);

  return (
    <div className="App">
      <h1 className="main-title"><span className="P1-score">0</span> - <span className="P2-score">0</span></h1>
      <div className="gameboard"></div>
    </div>
  );
}

export default App;
