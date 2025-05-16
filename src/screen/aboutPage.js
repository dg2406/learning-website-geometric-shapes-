import React from "react";
import "./aboutPage.css";
import { Grid2 } from "@mui/material";
import Header from "../Layout/header";

const AboutPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get values using document.getElementById
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const role = document.getElementById("role").value;
    const contentQuality = document.querySelector(
      'input[name="content_quality"]:checked'
    );
    const engagementLevel = document.querySelector(
      'input[name="engagement_level"]:checked'
    );
    const comments = document.getElementById("comments").value.trim();
    const suggestions = document.getElementById("suggestions").value.trim();
    const issues = document.getElementById("issues").value.trim();


    if (!name) {
      alert("Name is required.");
      return;
    }

    if (email && !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!role) {
      alert("Please select a role.");
      return;
    }

    if (!contentQuality) {
      alert("Please rate the content quality.");
      return;
    }

    if (!engagementLevel) {
      alert("Please rate the engagement level.");
      return;
    }

    alert("Feedback submitted successfully!");
    console.log({
      name,
      email,
      role,
      contentQuality: contentQuality.value,
      engagementLevel: engagementLevel.value,
      comments,
      suggestions,
      issues,
    });
  };

  return (
    <Grid2 sx={{ backgroundColor: "#454545" }} height={"1500px"}>
      <Header />
      <div className="container" >
        <h1 style={{marginTop:"100px"}}>Feedback Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name"  />

       
          <label htmlFor="email">Email (Optional):</label>
          <input type="text" id="email" name="email" />

        
          <label htmlFor="role">Role:</label>
          <select id="role" name="role">
            <option value="">Select a role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="parent">Parent</option>
            <option value="other">Other</option>
          </select>

          
          <h2>Content Quality</h2>
          <p>Rate the clarity and usefulness of the materials provided:</p>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <React.Fragment key={`content-${value}`}>
                <input
                  type="radio"
                  id={`content-${value}`}
                  name="content_quality"
                  value={value}
                />
                <label htmlFor={`content-${value}`}>{value}</label>
              </React.Fragment>
            ))}
          </div>

          
          <textarea id="comments" placeholder="Comments..." rows={4}></textarea>
       <h2>Engagement Level</h2>
          <p>How engaging did you find the activities?</p>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <React.Fragment key={`engagement-${value}`}>
                <input
                  type="radio"
                  id={`engagement-${value}`}
                  name="engagement_level"
                  value={value}
                />
                <label htmlFor={`engagement-${value}`}>{value}</label>
              </React.Fragment>
            ))}
          </div>

     
          <h2>Specific Suggestions</h2>
          <textarea
            id="suggestions"
            placeholder="What additional features or topics would enhance your learning experience?"
            rows={4}
          ></textarea>


          <h2>Issue Reporting</h2>
          <textarea
            id="issues"
            placeholder="Please describe any technical issues you encountered:"
            rows={4}
          ></textarea>

 \
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </Grid2>
  );
};

export default AboutPage;
