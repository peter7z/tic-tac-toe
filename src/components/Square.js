import React from "react";
import { func, string } from "prop-types";

const Square = ({ value, onClick }) => (
  <button onClick={onClick} className="square">
    {value}
  </button>
);

Square.propTypes = {
  value: string,
  onClick: func.isRequired,
};

export default Square;
