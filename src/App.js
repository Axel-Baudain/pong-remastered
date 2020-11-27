// ========== BASE DEPENDENCIES ==========

import React, { useEffect } from 'react';
import './App.css';

// ========== GAME FUNCTIONS ==========
import boardConstruct from './assets/functions/boardconstruct';

// ========== DATA ==========
import board from './assets/data/board';

function App() {

  useEffect(() => {
    boardConstruct(board);
    document.title = 'Pong remastered';
  }, []);

  return (
    <div className="App">
      Pong remastered
    </div>
  );
}

export default App;
