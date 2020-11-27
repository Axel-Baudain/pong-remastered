import React, { useEffect, useState } from 'react';
import './App.css';

import boardConstruct from './assets/functions/boardconstruct';
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
