import React, { useState } from 'react';
import './App.css';
import Board from './Board';
import PlayerInfo from './PlayerInfo';

const App: React.FC = () => {
  return (
    <div className="app">
      <PlayerInfo playerId={1} />
      <Board />
      <PlayerInfo playerId={2} />
    </div>
  );
};

export default App;
