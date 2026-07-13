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
const Triangle = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "1700px",
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
              height: 230,
              width: 450,
              alignContent: "center",
              marginLeft: "250px",
              backgroundColor: "blue",
              marginTop: "10px",
            }}
            image="../Triangle.png"
            title="Triangle"
          />
          <CardContent style={{ marginBottom: "10px" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ marginBottom: "20px",  color:"charcoal"}}
            >
              Triangle
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "darkcyan", fontSize: "18px", marginBottom: "50px"  }}
            >
              A triangle is a polygon with three corners and three sides, one of the basic shapes in geometry. The corners, also called vertices, are zero-dimensional points while the sides connecting them, also called edges, are one-dimensional line segments. A triangle has three internal angles, each one bounded by a pair of adjacent edges; the sum of angles of a triangle always equals a straight angle (180 degrees or π radians). The triangle is a plane figure and its interior is a planar region. Sometimes an arbitrary edge is chosen to be the base, in which case the opposite vertex is called the apex; the shortest segment between the base and apex is the height. The area of a triangle equals one-half the product of height and base length.

          In Euclidean geometry, any two points determine a unique line segment situated within a unique straight line, and any three points that do not all lie on the same straight line determine a unique triangle situated within a unique flat plane. More generally, four points in three-dimensional Euclidean space determine a tetrahedron.

         In non-Euclidean geometries, three "straight" segments (having zero curvature) also determine a triangle, for instance, a spherical triangle or hyperbolic triangle. A geodesic triangle is a region of a general two-dimensional surface enclosed by three sides that are straight relative to the surface (geodesics). A curvilinear triangle is a shape with three curved sides, for instance, a circular triangle with circular-arc sides. This article is about straight-sided triangles in Euclidean geometry, except where otherwise noted.

    </Typography>
    <Typography variant="body2"
              sx={{ color: "blue", fontSize: "18px", marginBottom: "50px"  }}>Triangles are classified into different types based on their angles and the lengths of their sides. Relations between angles and side lengths are a major focus of trigonometry. In particular, the sine, cosine, and tangent functions relate side lengths and angles in right triangles.
            </Typography>
            <Typography
              variant="body2"
              style={{ fontSize: "18px", color: "purple", marginBottom: "20px" }}
            >
             <strong style={{color:"black"}}> Angles of Triangle:</strong> There are three angles in a triangle. These angles are formed by two sides of the triangle, which meets at a common point, known as the vertex. The sum of all three interior angles is equal to 180 degrees. 

If we extend the side length outwards, then it forms an exterior angle. The sum of consecutive interior and exterior angles of a triangle is supplementary. 
              
       </Typography>
             <Typography variant="body2"
              style={{ fontSize: "18px", color: "purple", marginBottom: "20px" }}><strong style={{color:"black"}}> Properties:</strong>Each and every shape in Maths has some properties which distinguish them from each other. Let us discuss here some of the properties of triangles.
            <ol>
             <li> A triangle has three sides and three angles.</li>
             <li> The sum of the angles of a triangle is always 180 degrees.</li>
             <li> The exterior angles of a triangle always add up to 360 degrees.</li>
             <li> The sum of consecutive interior and exterior angle is supplementary.</li>
             <li> The sum of the lengths of any two sides of a triangle is greater than the length of the third side. Similarly, the difference between the lengths of any two sides of a triangle is less than the length of the third side.</li>
             <li>  The shortest side is always opposite the smallest interior angle. Similarly, the longest side is always opposite the largest interior angle.</li></ol>
             </Typography>
             
              <Typography variant="body2"
              style={{ fontSize: "18px", color: "purple", marginBottom: "20px" }}> <strong style={{color:"black"}}> Right triangle:</strong> In this triangle type, the largest angle equals 90 degrees. The other two angles are acute angles or less than 90 degrees and they both add up to 90 degrees as well. This is because the sum of all three angles within a triangle is always 180 degrees.</Typography>
             
              <Typography variant="body2"
              style={{ fontSize: "18px", color: "purple", marginBottom: "20px" }}> <strong style={{color:"black"}}>Obtuse triangle:</strong>  In this triangle type, the largest angle equals more than 90 degrees (obtuse angle). The other two angles are acute angles or less than 90 degrees. </Typography>
              
              <Typography variant="body2"
              style={{ fontSize: "18px", color: "purple", marginBottom: "20px" }}><strong style={{color:"black"}}>Acute triangle:</strong> 
             In this triangle type, the largest angle equals less than 90 degrees (acute angle). The other two angles are also acute angles or less than 90 degrees.
</Typography>

              <Typography variant="body2"
              style={{ fontSize: "18px", color: "purple" , marginBottom: "20px" }}> <strong style={{color:"black"}}>Equilateral triangle: </strong>In this triangle type, all three sides measure the same. This triangle has all three angles that measure the same within the triangle as all three sides are the same. This means each angle measures 60 degrees as all three angles add up to 180 degrees.</Typography>

              <Typography variant="body2"
              style={{ fontSize: "18px", color: "purple" , marginBottom: "20px" }}><strong style={{color:"black"}}>Scalene
              triangle:</strong> In this triangle type, none of the sides measure the same. Thus, none of the angles measure the same either. However, the angles continue to add up to 180 degrees like for any triangle. </Typography>

              <Typography variant="body2"
              style={{ fontSize: "18px", color: "purple" , marginBottom: "40px" }}> <strong style={{color:"black"}}>Isosceles triangle:</strong>  It has two equal sides. Also, the angles opposite these equal sides are equal.
             </Typography>
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
              <li style={{color:"darkviolet", marginBottom:"15px", fontWeight:"bold"}}>Area = 1/2 x Base x Height</li>
              <li style={{color:"darkcyan" , marginBottom:"15px" ,fontWeight:"bold"}}>The perimeter of a triangle is the length of the outer boundary of a triangle. To find the perimeter of a triangle we need to add the length of the sides of the triangle.
         <br/> P = a + b + c
</li>
              <li style={{color:"red", marginBottom:"15px",fontWeight:"bold"}}> Semi-perimeter of a triangle is half of the perimeter of the triangle. It is represented by s.
          s = (a + b + c)/2

         <br/> where a, b and c are the sides of the triangle.
</li>
              <li style={{color:"darkcyan", marginBottom:"15px",fontWeight:"bold"}}>By Heron’s formula, the area of the triangle is given by:
          A = √[s(s – a)(s – b)(s – c)]

          <br/>where ‘s’ is the semi-perimeter of the triangle.
</li>
              <li style={{color:"orange", marginBottom:"15px",fontWeight:"bold"}}>By the Pythagorean theorem, the hypotenuse of a right-angled triangle can be calculated by the formula:
          <br/>H^2= B^2 + P^2</li>
            </ul>

          </Typography>
        </Box>
      </Modal> 
         
          </CardContent>
          <CardActions>
            <a href="https://en.wikipedia.org/wiki/Triangle#:~:text=A%20triangle%20is%20a%20polygon,are%20one%2Ddimensional%20line%20segments.">Learn More</a>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Triangle;

