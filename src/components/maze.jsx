import React, { useState, memo } from "react";
import Board from "./board.jsx";
import Step from "./Step.jsx";

const possibleSteps = [
  [2, 3], // для первой ячейки
  [0, 2, 3], // для второй ячейки
  [0, 3],
  [1, 2, 3],
  [0, 1, 2, 3],
  [0, 1, 3],
  [1, 2],
  [0, 1, 2],
  [0, 1],
];

const Maze = ({ getMazeValue, MazeValue }, props) => {
  const [userClick, setuserClick] = useState(false);
  const handlechange = (field, value) => {
    getMazeValue(field, value);
  };
  const [squares, setsquares] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [disabledSquare, setdisabledSquare] = useState(false)
  const [disabledStart, setdisabledStart] = useState(false)
  const startGame = () => {
    setuserClick(false);
    setdisabledStart(true);
    setdisabledSquare(true);
    setTimeout(() => {
        setdisabledStart(false);
        setdisabledSquare(false);
    },11000)
    
    handlechange("steps", []);
    let i = Math.floor(Math.random() * Math.floor(9));
    handlechange("startSquare", i);
    handlechange("resultIcon", "💣");
    handlechange("startIcon", "👾");
    handlechange(
        "resultText",
        `Найдите правильную ячейку`
      );
  };

  return (
    <div className="game-container">
      <h1>Привет, друг! </h1>
      <h3 className="game-text"> Помоги мне найти моего робота! Только осторожно, если ты ошибёшься, бомба может взорваться.</h3>
      <span className="game-rules">Правила игры: Инопланетянин - начальная точка. Необходимо от него проложить путь в уме по стрелкам и выбрать место, куда он приземлится. Если бомба взорвалась, ты теряешь все очки, а если нет, то прибавляется 1 очко.</span>

      <h1>Ваши очки {MazeValue.gamePoints}</h1>
      <div className="game-start-btn-container"> 
        <button className="game-start-btn" disabled={disabledStart} onClick={() => startGame()}> Начать игру </button>
    </div>
    <div className="game-container-text"> 
      <span className="game-text"> {MazeValue.resultText}</span>
    </div>
      <div className="game">
        <div className="game-board">
          <Board
            squares={squares}
            MazeValue={MazeValue}
            handlechange={handlechange}
            userClick={userClick}
            setuserClick={setuserClick}
            disabledSquare={disabledSquare}
            setdisabledSquare={setdisabledSquare}
          />
        </div>
        <div className="game-board-steps">
          <Step MazeValue={MazeValue} handlechange={handlechange} />
        </div>
      </div>
    </div>
  );
};

export default memo(Maze);
