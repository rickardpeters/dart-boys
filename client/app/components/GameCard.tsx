type GameCardProps = {
  game: {
    id: string;
    name: string;
    players?: { playerId: string; score: number }[];
  };
};

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="card w-64 shadow-md m-4 bg-neutral rounded-sm">
      <div className="card-body">
        <h2 className="card-title text-xl">{game.name}</h2>

        <ul>
          {game.players &&
            game.players.map((player) => (
              <li key={player.playerId}>
                {player.playerId}: {player.score}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default GameCard;
