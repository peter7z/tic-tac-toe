import React, { useState } from "react";

import Square from "./Square";

const Board = () => {
  const [state] = useState("Next player: X");

  return (
    <div>
      <div className="status">{state}</div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};
export default Board;
