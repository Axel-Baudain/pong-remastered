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
      <div className="app-header">
        <div className="P1__controls">
          <div>
            ↑ - Z
          </div>
          <div>
            ↓ - S
          </div>
        </div>
        <div className="centered">
          <h1 className="main-title"><span className="P1-score">0</span> - <span className="P2-score">0</span></h1>
          <div className="launch_ball">L - Launch Ball</div>
        </div>
        <div className="P2__controls">
          <div>
            ↑ - Numpad8
          </div>
          <div>
            ↓ - Numpad5
          </div>
        </div>
      </div>
      <div className="gameboard"></div>
      <div className="footer">&copy; Axel Baudain - 2020</div>
    </div>
  );
}

export default App;
