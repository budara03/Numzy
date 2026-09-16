function Home() {
  return (
    <main className="home">
      <h1>Numzy</h1>

      <p className="tagline">
        Can you guess the secret number?
      </p>

      <div className="game-card">
        <p className="range">
          I'm thinking of a number between
          <strong> 1 - 100</strong>
        </p>

        <input
          type="number"
          placeholder="Enter your guess"
        />

        <button>
          Guess
        </button>

        <p className="hint">
          Make your first guess!
        </p>

        <div className="stats">
          <div className="stat">
            <span>Attempts</span>
            <strong>0</strong>
          </div>

          <div className="stat">
            <span>Score</span>
            <strong>100</strong>
          </div>
        </div>

        <button className="new-game">
          New Game
        </button>
      </div>
    </main>
  );
}

export default Home;
