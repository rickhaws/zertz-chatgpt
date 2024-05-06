import React from 'react';
import './App.css';
import Board from './Board';
import Player from './PlayerInfo';

const App: React.FC = () => {
  return (
    <div className="app">
      <Player playerId={1} />
      <Board />
      <Player playerId={2} />
    </div>
  );
};

export default App;
