import React, { useState } from "react";

import Square from "./Square";

const Board = () => {
  const [state] = useState("Next player: X");

  return (
    <div>
      <div className="status">{state}</div>
      <div className="board-row">
        <Square value={1} />
        <Square value={1} />
        <Square value={1} />
      </div>
      <div className="board-row">
        <Square value={1} />
        <Square value={1} />
        <Square value={1} />
      </div>
      <div className="board-row">
        <Square value={1} />
        <Square value={1} />
        <Square value={1} />
      </div>
    </div>
  );
};
export default Board;
