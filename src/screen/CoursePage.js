import React, { useState } from 'react';
import Header from "../Layout/header";
import './coursePage.css'; // Assume you have a CSS file for styling

const CoursePage = () => {
  const [activeLesson, setActiveLesson] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const lessons = [
    { id: 1, title: "Introduction to Geometry", content: "Geometry is the study of shapes and space..." },
    { id: 2, title: "Understanding Shapes", content: "Shapes are the fundamental building blocks of geometry..." },
    { id: 3, title: "Calculating Area", content: "Area is the amount of space inside the boundary of a flat shape..." },
    { id: 4, title: "Exploring Angles", content: "An angle is formed by two rays sharing a common endpoint..." },
    { id: 5, title: "3D Geometry", content: "3D geometry deals with three-dimensional shapes and their properties..." },
  ];

  const toggleLesson = (id) => {
    setActiveLesson(activeLesson === id ? null : id);
  };

  const handleVideoToggle = () => {
    setShowVideo(!showVideo);
  };

  const handleDemoToggle = () => {
    setShowDemo(!showDemo);
  };

  return (
    <>  
      <Header />
      <div className="container">
        <header>
          <h1>Geometric Learning Course</h1>
          <p>Explore the fascinating world of geometry through interactive lessons and quizzes.</p>
        </header>

        <section className="video-section">
          <h2>Course Introduction Video</h2>
          <button onClick={handleVideoToggle}>{showVideo ? 'Hide Video' : 'Show Video'}</button>
          {showVideo && (
            <video controls width="600">
              <source src="intro-video.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          )}
        </section>

        <section className="image-gallery">
          <h2>Course Images</h2>
          <div className="images">
            <img src="Circle.png" alt="Geometric Shape 1" />
            <img src="Triangle.png" alt="Geometric Shape 2" />
            <img src="Square.jpeg" alt="Geometric Shape 3" />
          </div>
        </section>

        <section className="course-content">
          <h2>Course Content Overview</h2>
          <ul>
            {lessons.map((lesson) => (
              <li key={lesson.id} onClick={() => toggleLesson(lesson.id)} className="lesson-item">
                <h3>{lesson.title}</h3>
                {activeLesson === lesson.id && <p>{lesson.content}</p>}
              </li>
            ))}
          </ul>
        </section>

        <section className="interactive-demo">
          <h2>Interactive Shape Demo</h2>
          <button onClick={handleDemoToggle}>{showDemo ? 'Hide Demo' : 'Show Demo'}</button>
          {showDemo && (
            <div className="shape-demo">
              <svg width="200" height="200" className="demo-svg">
                <circle cx="100" cy="100" r="80" fill="lightblue" stroke="blue" strokeWidth="2" />
                <text x="100" y="100" textAnchor="middle" fill="darkblue">Circle</text>
              </svg>
              <p>Click on different parts of the shape to learn more!</p>
            </div>
          )}
        </section>

        <section className="course-resources">
          <h2>Additional Resources</h2>
          <ul>
            <li><a href="#">Geometry Textbook PDF</a></li>
            <li><a href="#">Practice Worksheets</a></li>
            <li><a href="#">Video Tutorials Playlist</a></li>
            <li><a href="#">Online Geometry Calculator</a></li>
          </ul>
        </section>

        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          <details>
            <summary>What prerequisites are needed for this course?</summary>
            <p>Basic understanding of arithmetic and algebra is recommended.</p>
          </details>
          <details>
            <summary>How long does it take to complete the course?</summary>
            <p>The course is self-paced, but typically takes 4-6 weeks to complete.</p>
          </details>
          <details>
            <summary>Are there any certifications available?</summary>
            <p>Yes, upon completion you will receive a certificate of achievement.</p>
          </details>
        </section>

        <footer>
          <p>&copy; 2025 Geometric Learning. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default CoursePage;
