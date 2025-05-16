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
const Circle = () => {
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
            backgroundColor: "#C1E1C1",
            boxShadow:20
          }}
        >
          <CardMedia
            sx={{
              height: 220,
              width: 250,
              alignContent: "center",
              marginLeft: "250px",
              backgroundColor: "blue",
              marginTop: "10px",
            }}
            image="../Circle.png"
            title="Circle"
          />
          <CardContent style={{ marginBottom: "10px" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ marginBottom: "20px",  color:"charcoal"}}
            >
              Circle
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "blue", fontSize: "18px", marginBottom: "50px"  }}
            >
              A circle is a shape consisting of all points in a plane that are
              at a given distance from a given point, the centre. The distance
              between any point of the circle and the centre is called the
              radius. The length of a line segment connecting two points on the
              circle and passing through the centre is called the diameter. A
              circle bounds a region of the plane called a disc. The circle has
              been known since before the beginning of recorded history. Natural
              circles are common, such as the full moon or a slice of round
              fruit. The circle is the basis for the wheel, which, with related
              inventions such as gears, makes much of modern machinery possible.
              In mathematics, the study of the circle has helped inspire the
              development of geometry, astronomy and calculus.
            </Typography>
            <Typography
              variant="body2"
              style={{ fontSize: "18px", color: "purple", marginBottom: "20px" }}
            >
             <strong style={{color:"black"}}> Radius of Circle (r):</strong> A line segment connecting the centre of a
              circle to any point on the circle itself “. The radius of the
              circle is denoted by “R” or “r”. </Typography>
             <Typography variant="body2"
              style={{ fontSize: "18px", color: "purple", marginBottom: "20px" }}><strong style={{color:"black"}}> Diameter (d) of Circle:</strong> A line
              segment having both the endpoints on the circle. It is twice the
              length of radius i.e. d = 2r. From the diameter, the radius of the
              circle formula is obtained as r= d/2.</Typography>
             
              <Typography variant="body2"
              style={{ fontSize: "18px", color: "purple", marginBottom: "20px" }}> <strong style={{color:"black"}}> Chord of a Circle:</strong> A chord
              is any line segment touching the circle at two different points on
              its boundary. The longest chord in a circle is its diameter which
              passes through the center and divides it into two equal parts.</Typography>
             
              <Typography variant="body2"
              style={{ fontSize: "18px", color: "purple", marginBottom: "20px" }}> <strong style={{color:"black"}}>Tangent:</strong> A tangent is a line that touches the circle at a unique
              point and lies outside the circle. </Typography>
              
              <Typography variant="body2"
              style={{ fontSize: "18px", color: "purple", marginBottom: "20px" }}><strong style={{color:"black"}}>Secant:</strong> A line that intersects
              two points on an arc/circumference of a circle is called the
              secant.</Typography>

              <Typography variant="body2"
              style={{ fontSize: "18px", color: "purple" , marginBottom: "20px" }}> <strong style={{color:"black"}}>Arc of a Circle: </strong>An arc of a circle is referred to as a
              curve which is a part or portion of its circumference.</Typography>

              <Typography variant="body2"
              style={{ fontSize: "18px", color: "purple" , marginBottom: "20px" }}><strong style={{color:"black"}}>Segment in
              a Circle:</strong> The area enclosed by the chord and the corresponding arc
              in a circle is called a segment. There are two types of segments -
              minor segment and major segment. </Typography>

              <Typography variant="body2"
              style={{ fontSize: "18px", color: "purple" , marginBottom: "40px" }}> <strong style={{color:"black"}}>Sector of a Circle:</strong> The sector of
              a circle is defined as the area enclosed by two radii and the
              corresponding arc in a circle. There are two types of sectors -
              minor sector, and major sector.</Typography>
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
              <li style={{color:"darkviolet", marginBottom:"15px", fontWeight:"bold"}}>Diameter: The diameter of a circle is twice the length of its radius,D=2r</li>
              <li style={{color:"darkcyan" , marginBottom:"15px" ,fontWeight:"bold"}}>.Circumference: The circumference of a circle is the distance around the circle,(C=2*pi *r)</li>
              <li style={{color:"red", marginBottom:"15px",fontWeight:"bold"}}> Area: The area of a circle is A=pi*r^{2}</li>
              <li style={{color:"darkcyan", marginBottom:"15px",fontWeight:"bold"}}>Arc length: The length of an arc is s=2*pi*r* (theta /360degree )</li>
              <li style={{color:"darkgreen", marginBottom:"15px",fontWeight:"bold"}}> Area of a sector: The area of a sector of a circle is (theta *r^{2}/2)</li>
              <li style={{color:"orange", marginBottom:"15px",fontWeight:"bold"}}>Length of a chord: The length of a chord is 2r*sintheta /2</li>
              <li style={{color:"darkviolet", marginBottom:"15px",fontWeight:"bold"}}> Area of a segment: The area of a segment is (r^{2}*(theta -sin theta )/2)</li>
            </ul>

          </Typography>
        </Box>
      </Modal> 
         
          </CardContent>
          <CardActions>
            <a href="https://en.wikipedia.org/wiki/Circle">Learn More</a>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Circle;
