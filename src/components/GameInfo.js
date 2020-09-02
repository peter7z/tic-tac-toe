import React from "react";
import { string, array, func } from "prop-types";

const GameInfo = ({ status, history, jumpTo }) => (
  <div className="game-info">
    <div>{status}</div>
    <ol>
      {history.map((step, move) => (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>
            {move ? "Go to move #" + move : "Go to game start"}
          </button>
        </li>
      ))}
    </ol>
  </div>
);

GameInfo.propTypes = {
  status: string.isRequired,
  jumpTo: func.isRequired,
  history: array.isRequired,
};

export default GameInfo;
