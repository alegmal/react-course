const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function GameBoard() {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => {
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => {
              <il key={colIndex}>
                <button>{playerSymbol}</button>
              </il>;
            })}
          </ol>
          ;
        </li>;
      })}
    </ol>
  );
}
