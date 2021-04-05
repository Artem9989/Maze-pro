import React from "react";
import Cell from "./cell.jsx";

const Board = (
  { handlechange, MazeValue,  userClick, setuserClick,disabledSquare,setdisabledSquare },
  props
) => {
  const renderCell = (value) => {
    return (
      <Cell
        currentSquare={MazeValue.currentSquare}
        value={value}
        handleRegionClick={handleRegionClick}
        startSquare={MazeValue.startSquare}
        startIcon={MazeValue.startIcon}
        resultIcon={MazeValue.resultIcon}
        userClick={userClick}
        disabledSquare={disabledSquare}
      />
    );
  };

  const handleRegionClick = (id) => {
    setdisabledSquare(true)
    if (MazeValue.currentSquare === id) {
      if (id === MazeValue.startSquare) {
        handlechange("startIcon", "🤖");
      }

      handlechange("resultIcon", "🤖");
      setuserClick(false);
      handlechange("resultText", `Поздравляю с победой`);
      setTimeout (() => {
        handlechange("currentSquare", null)
      },10000)
      handlechange("gamePoints", MazeValue.gamePoints+1)
    }
    else if (MazeValue.currentSquare === null){ 
        handlechange(
            "resultText",
            `Вы не начали игру :)`
          );
    }
    else {
        if (id === MazeValue.startSquare) {
            handlechange("startIcon", "💥");
         }
      handlechange("resultIcon", "💥");
      setuserClick(true);
      handlechange(
        "resultText",
        `К сожалению вы проигрыли, правильный блок на ${MazeValue.currentSquare + 1} ячейке`
      );
      setTimeout (() => {
        handlechange("currentSquare", null)
      },5000)
      handlechange("gamePoints", 0)
    }
  };

  return (
    <div>
      <div className="board-row">
        {renderCell(0)}
        {renderCell(1)}
        {renderCell(2)}
      </div>
      <div className="board-row">
        {renderCell(3)}
        {renderCell(4)}
        {renderCell(5)}
      </div>
      <div className="board-row">
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
      </div>
    </div>
  );
};

export default Board;
