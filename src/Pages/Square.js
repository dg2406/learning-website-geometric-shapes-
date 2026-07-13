import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 430,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Square = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "1200px",
        }}
      >
        <Card
          sx={{
            maxWidth: 1300,
            marginLeft: "100px",
            backgroundColor: "	#dddddd",
            boxShadow:20
          }}
        >
          <CardMedia
            sx={{
              height: 220,
              width: 250,
              alignContent: "center",
              marginLeft: "350px",
              backgroundColor: "blue",
              marginTop: "10px",
            }}
            image="../Square.jpeg"
            title="Circle"
          />
          <CardContent style={{ marginBottom: "10px" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ marginBottom: "20px",  color:"charcoal"}}
            >
              Square
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "coral", fontSize: "18px", marginBottom: "50px"  }}
            >
              In Euclidean geometry, a square is a regular quadrilateral, which means that it has four straight sides of equal length and four equal angles (90-degree angles, π/2 radian angles, or right angles). It can also be defined as a rectangle with two equal-length adjacent sides. It is the only regular polygon whose internal angle, central angle, and external angle are all equal (90°).
              A square has 4 lines of reflectional symmetry, two lines on midpoints and two through the opposite vertices. 

It's all sides are congruent and all angles equal to 90 degrees. 

If the perimeter is kept the same for all the quadrilaterals, the square has the largest area in all of them.

The square can be defined as a specialized case of a rectangle, but the rectangle can not be defined in terms of a square.



            </Typography>
            <Typography
              variant="body2"
              style={{ fontSize: "18px", color: "darkcyan", marginBottom: "20px" }}
            >
             <strong style={{color:"black"}}> Properties:</strong> 
<ol><li>It has 4 sides and 4 vertices.</li>
<li>Its sides are equal in length.</li>
 <li>All interior angles are equal and right angles, which means that each angle measures 90°.</li>
<li>The sum of all the interior angles is 360°.</li>
<li>Its two diagonals bisect each other at right angles.</li></ol>
 </Typography>
            
    < Typography
              variant="body2"
              style={{ fontSize: "18px", color: "darkcyan", marginBottom: "20px" }}
            ><strong>Area of square:</strong>The area of a square is defined as the measure of space occupied by the square</Typography>
          < Typography
              variant="body2"
              style={{ fontSize: "18px", color: "darkcyan", marginBottom: "20px" }}
            ><strong>Perimeter of square:</strong>The area of a square is defined as the measure of space occupied by the square</Typography>
            < Typography
              variant="body2"
              style={{ fontSize: "18px", color: "darkcyan", marginBottom: "20px" }}
            ><strong>Diagonal of square:</strong>The area of a square is defined as the measure of space occupied by the square</Typography>  
      <Button  style={{marginLeft:"20px ", justifyContent:"center", color:"white", border:"1px solid red", backgroundColor:"darkcyan"}}onClick={handleOpen}>Formulas</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{color:"crimson"}}>

            Important formulas
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ul>
              <li style={{color:"darkviolet", marginBottom:"15px", fontWeight:"bold"}}> Area = a2 sq.unit</li>
              <li style={{color:"darkcyan" , marginBottom:"15px" ,fontWeight:"bold"}}>Perimeter = 4 × side of the square </li>
              <li style={{color:"darkgreen", marginBottom:"15px",fontWeight:"bold"}}> Diagonal= s√2</li>
            </ul>

          </Typography>
        </Box>
      </Modal> 
         
          </CardContent>
          <CardActions>
            <a href="https://en.wikipedia.org/wiki/Square">Learn More</a>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Square;

