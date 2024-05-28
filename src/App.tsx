import React from 'react';
import './App.css';
import Board from './Board';
import Player from './PlayerInfo';
import * as Game from './Game';

const App: React.FC = () => {
  return (
    <div className="app">
      <Player playerId={1} />
      <Board game={Game}/>
      <Player playerId={2} />
    </div>
  );
};

export default App;
