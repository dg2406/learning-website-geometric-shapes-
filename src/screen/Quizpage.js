import React, { useState, useEffect } from "react";
import Header from "../Layout/header";
import "./quizPage.css";

const Quizpage = () => {
  const questions = [
    {
      id: 1,
      question: "What is the formula for area of circle?",
      options: ["πr²", "2πr", "πd", "r²"],
      correct: "πr²",
    },

    {
      id: 2,
      question: "What is the circumference formula of circle?",
      options: ["πr²", "2πr", "πd", "r²"],
      correct: "2πr",
    },

    {
      id: 3,
      question: "Area of triangle formula?",
      options: ["1/2 * base * height", "base * height", "side²", "2πr"],
      correct: "1/2 * base * height",
    },

    {
      id: 4,
      question: "Square has how many equal sides?",
      options: ["2", "3", "4", "5"],
      correct: "4",
    },

    {
      id: 5,
      question: "Sum of angles of triangle?",
      options: ["90 degree", "180 degree", "360 degree", "270 degree"],
      correct: "180 degree",
    },
  ];

  const [answers, setAnswers] = useState({});

  const [time, setTime] = useState(120);

  const [submitted, setSubmitted] = useState(false);

  const [score, setScore] = useState(0);

  // TIMER

  useEffect(() => {
    if (time === 0) {
      submitQuiz();

      return;
    }

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const handleAnswer = (id, value) => {
    setAnswers({
      ...answers,

      [id]: value,
    });
  };

  const submitQuiz = () => {
    let marks = 0;

    questions.forEach((q) => {
      if (answers[q.id] === q.correct) marks++;
    });

    setScore(marks);

    setSubmitted(true);

    let result = {
      date: new Date().toLocaleDateString(),

      score: marks,

      total: questions.length,
    };

    let history = JSON.parse(localStorage.getItem("quizHistory")) || [];

    history.push(result);

    localStorage.setItem(
      "quizHistory",

      JSON.stringify(history)
    );
  };

  const restart = () => {
    setAnswers({});

    setSubmitted(false);

    setScore(0);

    setTime(120);
  };

  return (
    <>
      <Header />

      <div className="quiz-container">
        <h1>Geometry Quiz</h1>

        {!submitted && (
          <h2>
            Time Remaining:
            {Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}
          </h2>
        )}

        {submitted ? (
          <div className="result">
            <h2>Quiz Completed</h2>

            <h3>
              Score :{score}/{questions.length}
            </h3>

            <h3>Percentage :{(score / questions.length) * 100}%</h3>

            <h3>{score >= 3 ? "PASS 🎉" : "Try Again"}</h3>

            <button onClick={restart}>Restart Quiz</button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();

              submitQuiz();
            }}
          >
            {questions.map((q) => (
              <div key={q.id} className="quiz-question">
                <h3>
                  {q.id}. {q.question}
                </h3>

                <div className="quiz-options">
                  {q.options.map((option) => (
                    <div className="quiz-option" key={option}>
                      <input
                        type="radio"
                        id={`${q.id}-${option}`}
                        name={q.id}
                        value={option}
                        checked={answers[q.id] === option}
                        onChange={() => handleAnswer(q.id, option)}
                      />

                      <label htmlFor={`${q.id}-${option}`}>{option}</label>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <button type="submit">Submit Quiz</button>
          </form>
        )}
      </div>
    </>
  );
};

export default Quizpage;
