import React from "react";

const Cell = ({
  value,
  handleRegionClick,
  MazeValue,
  startSquare,
  startIcon,
  userClick,
  resultIcon,
  currentSquare,
  disabledSquare,
  ...props
}) => {

  if (value === startSquare) {
    return (
      <button
        className="square"
        key={value}
        disabled={disabledSquare}
        onClick={() => handleRegionClick(value)}
      >
        
        {startIcon}
      </button>
    );
  } else if (value === currentSquare) {
    return (
      <button
        className="square"
        key={value}
        disabled={disabledSquare}
        onClick={() => handleRegionClick(value)}
      >
        
        {userClick ? "💥" : resultIcon}
      </button>
    );
  } else {
    return (
      <button
        className="square"
        key={value}
        disabled={disabledSquare}
        onClick={() => handleRegionClick(value)}
      >
        {"💣"}
      </button>
    );
  }
};

export default Cell;
