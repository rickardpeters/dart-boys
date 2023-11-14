import React from "react";

type GamePageProps = {
  game: {
    id: string;
    name: string;
    players: { playerId: string; score: number }[];
  };
};

const GamePage: React.FC<GamePageProps> = ({ game }) => {
  const playerOne = game.players?.at(0);
  const playerTwo = game.players?.at(1);

  return (
    <div className="grid">
      <div className="flex w-screen my-6 justify-center text-7xl font-agbalumo">{game.name}</div>

      <div className="flex w-screen my-6 justify-center">
        {game.players &&
          game.players.map((player, index) => (
            <div className="grid grid-flow-col place-items-center text-6xl font-agbalumo" key={player.playerId}>
              {" " + player.score}
              {index < game.players.length - 1 && <div className="divider h-full w-[10vh] divider-horizontal"> - </div>}
            </div>
          ))}
      </div>

      <div className="flex w-screen h-52 p-6">
        <div className="grid h-[35vh] flex-grow card bg-base-200 rounded-box place-items-center relative">
          <div className="avatar placeholder absolute right-[5vw] -top-[15vh]">
            <div className="w-[10vw] bg-green-400 rounded-full ring ring-success ring-offset-success ring-offset-4">
              <span className="text-8xl font-titilliumWeb">{playerOne?.playerId.slice(0, 1)}</span>
            </div>
          </div>
          <div>{playerOne?.playerId}</div>
        </div>
        <div className="divider h-[35vh] w-[10vh] divider-horizontal text-3xl font-agbalumo">VS</div>
        <div className="grid h-[35vh] flex-grow card bg-base-200 rounded-box place-items-center relative">
          <div className="avatar placeholder absolute -top-[15vh] left-[5vw]">
            <div className="w-[10vw] bg-red-400 rounded-full ring ring-error ring-offset-error ring-offset-4">
              <span className="text-8xl font-titilliumWeb">{playerTwo?.playerId.slice(0, 1)}</span>
            </div>
          </div>
          <div>{playerTwo?.playerId}</div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
