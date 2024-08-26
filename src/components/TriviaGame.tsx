import GameCard from "./GameCard";
/*import "./TriviaGame.css";*/

function TriviaGame() {
  return (
    <div className="trivia-game">
      <h1>Trivia Time!</h1>
      <GameCard />
      <button>Previous</button>
      <button>Next</button>
      <button>Reset</button>
      <div className="score-section">Score: Zero for now</div>
    </div>
  );
}

export default TriviaGame;
