import React from "react";
import { array, func } from "prop-types";

import Square from "./Square";

const Board = ({ onSquareClick, squares }) => (
  <div>
    {/* <div className="status">{status}</div> */}
    <div className="board-row">
      <Square value={squares[0]} onClick={() => onSquareClick(0)} />
      <Square value={squares[1]} onClick={() => onSquareClick(1)} />
      <Square value={squares[2]} onClick={() => onSquareClick(2)} />
    </div>
    <div className="board-row">
      <Square value={squares[3]} onClick={() => onSquareClick(3)} />
      <Square value={squares[4]} onClick={() => onSquareClick(4)} />
      <Square value={squares[5]} onClick={() => onSquareClick(5)} />
    </div>
    <div className="board-row">
      <Square value={squares[6]} onClick={() => onSquareClick(6)} />
      <Square value={squares[7]} onClick={() => onSquareClick(7)} />
      <Square value={squares[8]} onClick={() => onSquareClick(8)} />
    </div>
  </div>
);

Board.propTypes = {
  onSquareClick: func.isRequired,
  squares: array.isRequired,
};

export default Board;
