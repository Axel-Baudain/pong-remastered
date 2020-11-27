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
      Pong remastered
    </div>
  );
}

export default App;
