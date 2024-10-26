const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { col, row } = square;

    gameBoard[row][col] = player;
  }

  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   const clickHandle = (rowIndex, colIndex) => {
  //     setGameBoard((prevBoardState) => {
  //       if (prevBoardState[rowIndex][colIndex] != null) {
  //         return prevBoardState;
  //       } else {
  //         const newBoardState = [
  //           ...prevBoardState.map((innerArray) => [...innerArray]),
  //         ];
  //         newBoardState[rowIndex][colIndex] = activeSymbol;

  //         onSelectSquare();
  //         return newBoardState;
  //       }
  //     });
  //   };

  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
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
