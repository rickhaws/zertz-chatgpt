// PlayerInfo.tsx
import React from 'react';

interface PlayerInfoProps {
  playerId: number;
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({ playerId }) => {
  return (
    <div className="player-info">
      <h2>Player {playerId}</h2>
      {/* Display player-specific information */}
    </div>
  );
};

export default PlayerInfo;
