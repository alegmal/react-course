import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activeSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const clickHandle = (rowIndex, colIndex) => {
    setGameBoard((prevBoardState) => {
      if (prevBoardState[rowIndex][colIndex] != null) {
        return prevBoardState;
      } else {
        const newBoardState = [
          ...prevBoardState.map((innerArray) => [...innerArray]),
        ];
        newBoardState[rowIndex][colIndex] = activeSymbol;

        onSelectSquare();
        return newBoardState;
      }
    });
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => clickHandle(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
