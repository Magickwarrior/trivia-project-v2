import { useState } from "react";

interface Props {
  question: string;
  answer: string;
  answerClass: string;
  onCorrectAnswer: () => void;
  onRevelAnswer: () => void;
}

const GameCard = ({
  question,
  answer,
  answerClass,
  onCorrectAnswer,
  onRevelAnswer,
}: Props) => {
  return (
    <div className="game-card">
      <h2>{question}</h2>
      <div id="answer" className={answerClass} onClick={onRevelAnswer}>
        {answer}
      </div>
      <button onClick={onCorrectAnswer}>Yep!</button>
    </div>
  );
};

export default GameCard;
