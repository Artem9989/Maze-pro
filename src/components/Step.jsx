import React, {  useEffect } from "react";

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

let current;
const Steps = ({ MazeValue, handlechange }) => {

  const getRandomIndex = (value) =>
    Math.floor(Math.random() * possibleSteps[value].length);

  const setCurrentStep = async (direction) => {
    switch (direction) {
      case 0:
        current = current - 1;
        break;
      case 1:
        current = current - 3;
        break;
      case 2:
        current = current + 1;
        break;
      case 3:
        current = current + 3;
        break;
        default: break;
    }
    
  };

  useEffect(() => {
    if (typeof MazeValue.startSquare === "number") {
      handlechange("steps", []);
      const index = getRandomIndex(MazeValue.startSquare);
      const direction = possibleSteps[MazeValue.startSquare][index];
      current = MazeValue.startSquare;
      handlechange("steps", [direction]);
      setCurrentStep(direction);
    }
  }, [MazeValue.startSquare]);

  useEffect(() => {
    if (MazeValue.steps.length < 10 && MazeValue.steps.length > 0) {
      setTimeout(() => {
        const index = getRandomIndex(current);
        const direction = possibleSteps[current][index];

        handlechange("steps", [...MazeValue.steps, direction]);
        setCurrentStep(direction);
        handlechange("currentSquare", current);
      }, 1000);
    }
  }, [MazeValue.steps]);

  const setArrow = (step) => {
    switch (step) {
      case 0:
        return <span className="arrow"> ← </span>
      case 1:
        return <span className="arrow"> ↑ </span>
      case 2:
        return <span className="arrow"> → </span>
      case 3:
        return <span className="arrow"> ↓ </span>
    }
  };
  return (
    <div>
      <div className="board-row">
        {MazeValue.steps.map((step, index) => {
          if (index < 5)
            return (
              <div className="square-arrow" key={index}>
                
                 {setArrow(step)} 
              </div>
            );
        })}
      </div>
      <div className="board-row">
        {MazeValue.steps.map((step, index) => {
          if (index >= 5)
            return (
              <div className="square-arrow" key={index}>
                
                {setArrow(step)} 
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Steps;
