import { useState } from "react";

function Home() {
  const [secretNumber, setSecretNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );

  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [score, setScore] = useState(100);
  const [message, setMessage] = useState("Make your first guess!");
  const [gameWon, setGameWon] = useState(false);

  const handleGuess = () => {
    const userGuess = Number(guess);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
      setMessage("Enter a number between 1 and 100.");
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (userGuess === secretNumber) {
      setMessage(`Correct! The number was ${secretNumber}!`);
      setGameWon(true);

      const newScore = Math.max(100 - (newAttempts - 1) * 10, 10);
      setScore(newScore);

      return;
    }

    if (userGuess < secretNumber) {
      setMessage("Too low! Try a higher number.");
    } else {
      setMessage("Too high! Try a lower number.");
    }

    const newScore = Math.max(100 - newAttempts * 10, 0);
    setScore(newScore);

    setGuess("");
  };

  const handleNewGame = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setAttempts(0);
    setScore(100);
    setMessage("Make your first guess!");
    setGameWon(false);
  };

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
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleGuess();
            }
          }}
          disabled={gameWon}
        />

        <button
          onClick={handleGuess}
          disabled={gameWon}
        >
          Guess
        </button>

        <p className="hint">
          {message}
        </p>

        <div className="stats">
          <div className="stat">
            <span>Attempts</span>
            <strong>{attempts}</strong>
          </div>

          <div className="stat">
            <span>Score</span>
            <strong>{score}</strong>
          </div>
        </div>

        <button
          className="new-game"
          onClick={handleNewGame}
        >
          New Game
        </button>
      </div>
    </main>
  );
}

export default Home;
