import React, {useState} from "react"
function ContactForm(){
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        message:""
    });
    const [errors,setErrors] = useState({});
    const handleChange=(event)=>{
        const {name,value}=event.target;
       setFormData((prevData)=>({
        ...prevData,
        [name]:value,
       }))
    }
    const validate = ()=>{
        const errors ={};
        if(!formData.name.trim()){
            errors.name ="Name is required"
        }
        if(!formData.email.trim()){
            errors.email ="Email is required"
        }
        else if(!/\S+@\S+\.\S+/.test(formData.email)){
            errors.email ="Email is invalid"
        }
        if(!formData.message.trim()){
            errors.message="Message is required"
        }
        return errors;
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length==0){
            console.log("Form Submitted",formData)
            alert("Form submitted Successfully")
            setFormData({name:"",email:"",message:""})
        }
        else{
            setErrors(validationErrors);
        }
    }
    return(
        <form onSubmit ={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type ="text"
                name="name"
                value={formData.name}
                onChange={handleChange}/>
                    {errors.name && <p style ={{color:"red"}}>{errors.name}</p>}
               
            </div>
            <div>
                <label>Email:</label>
                <input
                type = "email"
                name ="email"
                value={formData.email}
                onChange={handleChange}/>
                {errors.email && <p style ={{color:"red"}}>{errors.email}</p>}
            </div>
            <div>
                <label>Message:</label>
                <textarea name="message"
                value={formData.message}
                onChange={handleChange}/>
                {errors.message&&<p style ={{color:"red"}}>{errors.message}</p>}
            </div>
            <button type ="submit">submit</button>
        </form>
    )
}
export default ContactForm