import React, { useState } from 'react';
import Header from '../Layout/header';
import './quizPage.css';

const Quizpage = () => {
  const [selectedShape, setSelectedShape] = useState('');
  const [answers, setAnswers] = useState({});
  const [errors, setErrors] = useState({});

  const questions = [
    { id: 1, question: "What is the formula for the area of a circle?", options: ["πr²", "2πr", "πd", "r²"], correct: "πr²" },
    { id: 2, question: "What is the formula for the circumference of a circle?", options: ["πr²", "2πr", "πd", "r²"], correct: "2πr" },
    { id: 3, question: "What is the formula for the area of a triangle?", options: ["1/2 * base * height", "base * height", "3 * side", "side²"], correct: "1/2 * base * height" },
    { id: 4, question: "What is the formula for the area of a rectangle?", options: ["length * width", "2(length + width)", "length + width", "length²"], correct: "length * width" },
    { id: 5, question: "What is the formula for the perimeter of a rectangle?", options: ["length * width", "2(length + width)", "length + width", "4 * side"], correct: "2(length + width)" },
    { id: 6, question: "What is the formula for the volume of a sphere?", options: ["4/3πr³", "πr²", "4πr²", "1/3πr³"], correct: "4/3πr³" },
    { id: 7, question: "What is the formula for the surface area of a sphere?", options: ["4/3πr³", "πr²", "4πr²", "2πr"], correct: "4πr²" },
    { id: 8, question: "What is the formula for the volume of a cube?", options: ["side³", "6 * side²", "3 * side", "side²"], correct: "side³" },
    { id: 9, question: "What is the formula for the surface area of a cube?", options: ["side³", "6 * side²", "3 * side", "side²"], correct: "6 * side²" },
    { id: 10, question: "What is the formula for the area of a trapezoid?", options: ["1/2(a+b)h", "a+b+c+d", "(a+b)h", "1/2ah"], correct: "1/2(a+b)h" },
    { id: 11, question: "What is the formula for the volume of a cylinder?", options: ["πr²h", "2πrh", "πr²", "2πr²h"], correct: "πr²h" },
    { id: 12, question: "What is the formula for the surface area of a cylinder?", options: ["2πr² + 2πrh", "πr²h", "2πrh", "πr² + 2πrh"], correct: "2πr² + 2πrh" },
    { id: 13, question: "What is the formula for the area of a parallelogram?", options: ["base * height", "1/2 * base * height", "2(length + width)", "side²"], correct: "base * height" },
    { id: 14, question: "What is the formula for the area of a rhombus?", options: ["1/2 * d1 * d2", "side²", "4 * side", "1/2 * base * height"], correct: "1/2 * d1 * d2" },
    { id: 15, question: "What is the formula for the volume of a cone?", options: ["1/3πr²h", "πr²h", "4/3πr³", "1/2πr²h"], correct: "1/3πr²h" },
    { id: 16, question: "What is the formula for the surface area of a cone?", options: ["πr² + πrs", "2πr² + πrs", "πr² + 2πrs", "2πrs"], correct: "πr² + πrs" },
    { id: 17, question: "What is the formula for the volume of a rectangular prism?", options: ["length * width * height", "2(lw + lh + wh)", "l + w + h", "lw + lh + wh"], correct: "length * width * height" },
    { id: 18, question: "What is the formula for the surface area of a rectangular prism?", options: ["length * width * height", "2(lw + lh + wh)", "l + w + h", "lw + lh + wh"], correct: "2(lw + lh + wh)" },
    { id: 19, question: "What is the formula for the area of a regular pentagon?", options: ["1/2 * perimeter * apothem", "5 * side²", "5 * side", "1/4 * √(5(5+2√5)) * side²"], correct: "1/4 * √(5(5+2√5)) * side²" },
    { id: 20, question: "What is the formula for the area of a regular hexagon?", options: ["3√3/2 * side²", "6 * side²", "6 * side", "1/2 * perimeter * apothem"], correct: "3√3/2 * side²" },
  ];

  const handleShapeChange = (event) => {
    setSelectedShape(event.target.value);
  };

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const validateForm = () => {
    const errors = {};
    if (!selectedShape) {
      errors.shape = "Please select a shape before submitting.";
    }
    if (Object.keys(answers).length < questions.length) {
      errors.answers = "Please answer all questions before submitting.";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      let score = 0;
      questions.forEach(q => {
        if (answers[q.id] === q.correct) score++;
      });
      alert(`Your score: ${score} out of ${questions.length}`);
    }
  };

  return (
    <>   
      <Header/> 
      <div className="container">
        <h1>Geometric Learning Quiz</h1>
        <form onSubmit={handleSubmit}>
          <div className="shape-selection">
            <label>Select a shape:</label><br/>
            <input type="radio" id="circle" name="shape" value="circle" onChange={handleShapeChange}/>
            <label htmlFor="circle">Circle</label><br/>
            <input type="radio" id="triangle" name="shape" value="triangle" onChange={handleShapeChange}/>
            <label htmlFor="triangle">Triangle</label><br/>
            <input type="radio" id="rectangle" name="shape" value="rectangle" onChange={handleShapeChange}/>
            <label htmlFor="rectangle">Rectangle</label><br/>
            {errors.shape && <div style={{ color: 'red' }}>{errors.shape}</div>}
          </div>

          <div className="quiz-container">
            {questions.map((q) => (
              <div key={q.id} className="quiz-question">
                <h3>{q.question}</h3>
                {q.options.map((option, index) => (
                  <div key={index}>
                    <input 
                      type="radio" 
                      id={`q${q.id}-${index}`} 
                      name={`q${q.id}`} 
                      value={option}
                      onChange={() => handleAnswerChange(q.id, option)}
                    />
                    <label htmlFor={`q${q.id}-${index}`}>{option}</label>
                  </div>
                ))}
              </div>
            ))}
            {errors.answers && <div style={{ color: 'red' }}>{errors.answers}</div>}
          </div>

          <button type="submit">Submit Answers</button>
        </form>
      </div>
    </> 
  );
};

export default Quizpage;
