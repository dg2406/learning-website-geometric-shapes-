import React, {useState} from "react";
import Header from "../Layout/header";
import "./aboutPage.css";


const AboutPage =()=>{


const [formData,setFormData]=useState({

name:"",
email:"",
role:"",
contentQuality:"",
engagement:"",
comments:"",
suggestions:"",
issues:""

});


const [submitted,setSubmitted]=useState(false);



const handleChange=(e)=>{

setFormData({

...formData,

[e.target.name]:e.target.value

});

};



const handleSubmit=(e)=>{

e.preventDefault();


if(!formData.name){

alert("Name required");
return;

}


if(!formData.role){

alert("Select role");
return;

}


if(!formData.contentQuality){

alert("Rate content quality");
return;

}



if(!formData.engagement){

alert("Rate engagement");
return;

}



console.log(formData);


setSubmitted(true);


setFormData({

name:"",
email:"",
role:"",
contentQuality:"",
engagement:"",
comments:"",
suggestions:"",
issues:""

});


};





return(

<>


<Header/>


<div className="container">


<h1>
Student Feedback
</h1>


<form onSubmit={handleSubmit}>


<label>
Name
</label>


<input

name="name"

value={formData.name}

onChange={handleChange}

/>





<label>
Email
</label>


<input

name="email"

value={formData.email}

onChange={handleChange}

/>





<label>
Role
</label>


<select

name="role"

value={formData.role}

onChange={handleChange}

>


<option value="">
Select Role
</option>


<option value="student">
Student
</option>


<option value="teacher">
Teacher
</option>


<option value="parent">
Parent
</option>


</select>







<h2>
Content Quality
</h2>


<div className="rating">


{
[1,2,3,4,5].map((num)=>(

<React.Fragment key={num}>


<input

type="radio"

name="contentQuality"

value={num}

checked={
formData.contentQuality==num
}

onChange={handleChange}

/>


<label>
{num}
</label>


</React.Fragment>

))

}


</div>






<textarea

name="comments"

placeholder="Comments"

value={formData.comments}

onChange={handleChange}

/>








<h2>
Engagement Level
</h2>


<div className="rating">


{
[1,2,3,4,5].map((num)=>(

<React.Fragment key={num}>


<input

type="radio"

name="engagement"

value={num}

checked={
formData.engagement==num
}

onChange={handleChange}

/>


<label>
{num}
</label>


</React.Fragment>

))

}


</div>







<h2>
Suggestions
</h2>


<textarea

name="suggestions"

value={formData.suggestions}

onChange={handleChange}

placeholder="Suggestions"

/>






<h2>
Technical Issues
</h2>


<textarea

name="issues"

value={formData.issues}

onChange={handleChange}

placeholder="Report issues"

/>






<button type="submit">

Submit Feedback

</button>




{
submitted &&

<h3 className="success">

Feedback submitted successfully ✓

</h3>

}



</form>


</div>


</>

)

}


export default AboutPage;