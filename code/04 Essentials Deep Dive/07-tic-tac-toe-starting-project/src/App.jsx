function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player">
              <span className="player">Player 1</span>
              <span className="player-symbol">X</span>
            </span>
          </li>
          <li>
            <span className="player">
              <span className="player">Player 2</span>
              <span className="player-symbol">O</span>
            </span>
          </li>
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
