import { useState } from "react";
import GameCard from "./GameCard";

function TriviaGame() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  let answerClass = "answer" + (isAnswerVisible ? " visible" : "");

  const triviaQuestions = [
    { question: "Who was Zeus' father?", answer: "Kronus" },
    { question: "Which animal was the symbol of Zeus?", answer: "The Eagle" },
    { question: "Who was the Greek God of Wine?", answer: "Dionysus" },
    {
      question: "Who was the Greek Messenger God?",
      answer: "Hermes",
    },
    { question: "Which bird was the symbol of Athena?", answer: "Owl" },
    { question: "Who was the Greek Goddess of Wisdom?", answer: "Athena" },
    {
      question:
        "Who cursed Medusa with a head full of snakes, eternal life, and that any man who looks at her will be turned to stone?",
      answer: "Athena",
    },
    { question: "Who was the Greek god of Woods and Fields?", answer: "Pan" },
    { question: "Who was the Greek god of Music?", answer: "Apollo" },
    { question: "Who was Apollo's twin sister?", answer: "Artemis" },
    { question: "Who was the Greek God of Medicine?", answer: "Asclepius" },
    { question: "Who was the Greek Goddess of hunting?", answer: "Artemis" },
    { question: "Aphrodite is the Greek Goddess of what?", answer: "Love" },
    { question: "Ares is the Greek God of what?", answer: "War" },
    {
      question: "Who is the youngest Greek god?",
      answer: "Dyonisius",
    },
    { question: "Who was the wife of Zeus in Greek Myth?", answer: "Hera" },
    {
      question: "Who was the wife of Hades in Greek Myth?",
      answer: "Persephone",
    },
    { question: "Who was the Norse god of thunder?", answer: "Thor" },
    {
      question: "In Greek myth, who was the goddess of autumn?",
      answer: "Demeter",
    },
    { question: "The Greek god Poseidon ruled over what?", answer: "The Seas" },
    {
      question: "The Greek god Hades ruled over what?",
      answer: "The Underworld",
    },
    { question: "Which S is the Greek Goddess of the moon?", answer: "Selene" },
    {
      question: "How are offsprings of Gods with humans called?",
      answer: "Demigods",
    },
  ];
  function hideAnswer() {
    isAnswerVisible && setIsAnswerVisible(!isAnswerVisible);
  }

  const onRevelAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
    /*setTimeout(() => setIsAnswerVisible(false), 1500);*/
  };

  const handleCorrectAnswer = () => {
    // Update the score if the answer is correct
    setScore((prevScore) => prevScore + 1);
    hideAnswer();

    nextQuestion();
  };

  const nextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    hideAnswer();
    if (nextQuestionIndex < triviaQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Show the alert with the final score
      alert(`Congrats! Your score is ${score}/${triviaQuestions.length}`);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  const previousQuestion = () => {
    const prevQuestionIndex = currentQuestionIndex - 1;
    hideAnswer();
    if (prevQuestionIndex >= 0) {
      setCurrentQuestionIndex(prevQuestionIndex);
    }
  };

  const resetGame = () => {
    hideAnswer();
    setCurrentQuestionIndex(0);
    setScore(0);
    // Reset any other state variables if necessary
  };

  return (
    <div className="trivia-game">
      <h1>Trivia Time!</h1>
      <GameCard
        question={triviaQuestions[currentQuestionIndex].question}
        answer={triviaQuestions[currentQuestionIndex].answer}
        onCorrectAnswer={handleCorrectAnswer}
        answerClass={answerClass}
        onRevelAnswer={onRevelAnswer}
      />
      <button onClick={previousQuestion} disabled={currentQuestionIndex === 0}>
        Previous
      </button>
      <button onClick={nextQuestion}>Next</button>
      <button onClick={resetGame}>Reset</button>
      <div className="score">Score: {score}</div>
    </div>
  );
}

export default TriviaGame;
