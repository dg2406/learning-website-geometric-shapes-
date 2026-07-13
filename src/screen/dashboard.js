import React, { useEffect, useState } from "react";
import Header from "../Layout/header";
import "./dashboard.css";
import {
  Card,
  Typography,
  Grid,
  Button,
  Avatar,
  LinearProgress,
  Box,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const [quizHistory, setQuizHistory] = useState([]);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    const history = JSON.parse(localStorage.getItem("quizHistory")) || [];

    setUser(loggedUser);

    setQuizHistory(history);
  }, []);

  const logout = () => {
    localStorage.removeItem("loggedUser");

    navigate("/login");
  };

  const bestScore = quizHistory.length
    ? Math.max(...quizHistory.map((item) => item.score))
    : 0;

  const totalQuestions = 5;

  const percentage = quizHistory.length
    ? Math.round((bestScore / totalQuestions) * 100)
    : 0;

  return (
    <>
      <Header />

      <Box
  className="dashboard-container"
  sx={{
    marginTop: "80px",
    marginLeft: "260px",
    padding: "30px",
    minHeight: "100vh",
    background: "#f4f7fb",
  }}
>
        <Card
          sx={{
            padding: "30px",

            marginBottom: "30px",

            display: "flex",

            alignItems: "center",

            gap: "20px",
          }}
        >
          <Avatar
            sx={{
              width: 80,

              height: 80,

              fontSize: 35,
            }}
          >
            {user?.firstName?.charAt(0) || "U"}
          </Avatar>

          <Box>
            <Typography variant="h4">
              Welcome, {user?.firstName || "Student"}
            </Typography>

            <Typography>{user?.email}</Typography>
          </Box>

          
        </Card>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ padding: 4 }}>
              <Typography variant="h6">Shapes Learned</Typography>

              <Typography fontSize="45px" color="primary">
                8/20
              </Typography>

              <LinearProgress variant="determinate" value={40} />
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ padding: 4 }}>
              <Typography variant="h6">Best Quiz Score</Typography>

              <Typography fontSize="45px" color="green">
                {percentage}%
              </Typography>

              <LinearProgress variant="determinate" value={percentage} />
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ padding: 4 }}>
              <Typography variant="h6">Courses Completed</Typography>

              <Typography fontSize="45px" color="purple">
                3
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Card
          sx={{
            marginTop: "40px",

            padding: "30px",
          }}
        >
          <Typography variant="h5">Quiz Attempt History</Typography>

          {quizHistory.length === 0 ? (
            <Typography>No quiz attempts yet</Typography>
          ) : (
            quizHistory.map((quiz, index) => (
              <Box
                key={index}
                sx={{
                  marginTop: "15px",

                  padding: "15px",

                  background: "#eee",

                  borderRadius: "10px",
                }}
              >
                <Typography>Attempt {index + 1}</Typography>

                <Typography>
                  Score:
                  {quiz.score}/{quiz.total}
                </Typography>

                <Typography>
                  Date:
                  {quiz.date}
                </Typography>
              </Box>
            ))
          )}
        </Card>
      </Box>
    </>
  );
}
