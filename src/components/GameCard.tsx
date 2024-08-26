import { useState } from "react";

interface Props {
  question: string;
  answer: string;
  onCorrectAnswer: () => void;
}

const GameCard = ({ question, answer, onCorrectAnswer }: Props) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  let answerClass = "answer" + (isAnswerVisible ? " visible" : "");

  return (
    <div className="game-card">
      <h2>{question}</h2>
      <div
        id="answer"
        className={answerClass}
        onClick={() => {
          setIsAnswerVisible(!isAnswerVisible);
          setTimeout(() => setIsAnswerVisible(false), 1500);
        }}
      >
        {answer}
      </div>
      <button onClick={onCorrectAnswer}>Yep!</button>
    </div>
  );
};

export default GameCard;
