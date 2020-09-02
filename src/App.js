import React, { useState } from "react";
import "./App.css";

import Board from "./components/Board";
import GameInfo from "./components/GameInfo";

const App = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentStep, setStep] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const currentBoard = history[currentStep];

  const updateBoard = (i) => {
    if (calculateWinner(currentBoard) || currentBoard[i]) {
      return;
    }
    const newSquares = [...currentBoard];
    newSquares[i] = xIsNext ? "X" : "O";

    const newHistory = history.splice(0, currentStep + 1);
    newHistory.push(newSquares);

    setStep(currentStep + 1);
    setXIsNext(!xIsNext);
    setHistory(newHistory);
  };

  const calculateWinner = (squares) => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const jumpTo = (move) => {
    setStep(move);
    setXIsNext(move % 2 === 0);
  };

  const winner = calculateWinner(currentBoard);
  const status = winner
    ? `The winner is ${winner}`
    : `Next player is: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="game">
      <div className="game-board">
        <Board
          status={"status"}
          squares={currentBoard}
          onSquareClick={updateBoard}
        />
      </div>
      <GameInfo jumpTo={jumpTo} status={status} history={history} />
    </div>
  );
};

export default App;

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
