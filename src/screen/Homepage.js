import React, { useState } from "react";
import Header from "../Layout/header";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Paper
} from "@mui/material";

import Circle from "../Pages/Circle";
import Square from "../Pages/Square";
import Triangle from "../Pages/Triangle";
import None from "../Pages/None";

import "./homepage.css";


const Homepage = () => {

  const [type, setType] = useState("");


  const handleChange = (event) => {

    setType(event.target.value);

  };


  const figure_select = () => {

    switch(type){

      case "circle":
        return <Circle/>;

      case "triangle":
        return <Triangle/>;

      case "square":
        return <Square/>;

      default:
        return <None/>;

    }

  };


  return (

    <>

      <Header/>


      <Box className="home-container">


        <Typography 
          variant="h2"
          className="home-title"
        >
          Interactive Geometry Learning
        </Typography>


        <Typography className="home-subtitle">
          Select a shape and explore its properties, formulas and calculations.
        </Typography>



        <Paper className="shape-selector">


          <FormControl fullWidth>


            <InputLabel>
              Select Shape
            </InputLabel>


            <Select

              value={type}

              label="Select Shape"

              onChange={handleChange}

            >


              <MenuItem value="">
                None
              </MenuItem>


              <MenuItem value="circle">
                🔴 Circle
              </MenuItem>


              <MenuItem value="triangle">
                🔺 Triangle
              </MenuItem>


              <MenuItem value="square">
                🟦 Square
              </MenuItem>


            </Select>


          </FormControl>


        </Paper>



        <Box className="shape-display">

          {figure_select()}

        </Box>


      </Box>


    </>

  );

};


export default Homepage;