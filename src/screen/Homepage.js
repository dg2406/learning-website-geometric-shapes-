import React, { useState } from "react";
import Header from "../Layout/header";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Circle from "../Pages/Circle";
import Square from "../Pages/Square";
import Triangle from "../Pages/Triangle";
import None from "../Pages/None";
const Homepage = () => {
  const [type, setType] = useState("");
  function handleChange(event) {
    setType(event.target.value);
  }
  function figure_select() {
    switch (type) {
      case "":
        return <None />;
      case "circle":
        return <Circle />;
      case "triangle":
        return <Triangle />;
      case "square":
        return <Square />;

      default:
        return;
    }
  }

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: "55px",
          backgroundColor: "whiteSmoke	",
        }}
      >
        <FormControl
          sx={{
            m: 1,
            minWidth: 250,
            marginLeft: "500px",
            marginTop: "80px",
            marginBottom: "80px",
            borderRadius: "8px",
          }}
        >
          <InputLabel
            id="demo-simple-select-helper-label"
            style={{
              fontSize: "20px",
              fontWeight: "400",
              textAlign: "center",
              color: "#333",
            }}
          >
            Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={type}
            label="type"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="circle" style={{ color: "red" }}>
              circle
            </MenuItem>
            <MenuItem value="triangle" style={{ color: "green" }}>
              triangle
            </MenuItem>
            <MenuItem value="square" style={{ color: "blue" }}>
              square
            </MenuItem>
          </Select>
          <FormHelperText>Select shape</FormHelperText>
        </FormControl>
        {figure_select()}
      </Box>
    </Box>
  );
};

export default Homepage;
