import React, {useState} from 'react'
function FormComponent(){
const [formData, setFormData] = useState({
    name:'',
    email:''
});
const handleChange = (event)=>{
    const {name,value} = event.target;
    setFormData((prevData)=>({
        ...prevData,
        [name]:value,
    }))
}
const handleSubmit = (event)=>{
    event.preventDefault();
    alert(`Submitted:Name:${formData.name},Email:${formData.email}`)
}
return(
    <form onSubmit={handleSubmit}>
        <div>
            <lable>Name:</lable>
            <input type ="text"
            name="name"
            value={formData.name}
            onChange={handleChange}/>
        </div>
        <div>
            <label>Email:</label>
            <input input = "email"
            name ="email"
            value ={formData.email}
            onChange ={handleChange}/>
        </div>
        <button type="Submit">Submit</button>
    </form>
)
};

export default FormComponent;