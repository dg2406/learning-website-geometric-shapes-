import Header from "../Layout/header";
import React from 'react';


const ContactPage=()=>{
    return(
     <>  <Header/>
        <div class="container" style={{marginTop:"200px"}}>
        <p><strong>Email:</strong> info@geometriclearning.com</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Address:</strong> 123 Geometry Lane, Math City, CA 90210</p>
    </div>
    </> 
    )
}

export default ContactPage