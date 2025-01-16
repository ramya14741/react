import React,{useState} from "react";

function EmployeeValidationForm() {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    employeeId:"",
    joiningDate:""
  })
  const [errors,setErrors]=useState({
    name:"",
    email:"",
    employeeId:"",
    joiningDate:""
  })
  const isFutureDate =(date)=>{
    const today = new Date();
    const inputDate=new Date(date);
    return inputDate>today;
  }
  const validateField=(name,value)=>{
    switch(name){
      case "name":
        
      if(!/^[A-Za-z\s]{4,}$/.test(value)){
        return "Name must be at least 4 characters long and only contain letters and spaces."
      }
      break;
      case "email":
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
          return "Email must be a valid email address."
        }
        break;
        case "employeeId":
          if(!/^\d{6}$/.test(value)){
            return "Employee ID must be exactly 6 digits."
          }
          break;
          case "joiningDate":
            if(isFutureDate(value)){
              return "Joining Date cannot be in the future."
            }
            break;
            default:return "";
    }
    return "";
  }
  const handleChange=(e)=>{
    const {name, value}= e.target;
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }))
    const errorMessage=validateField(name,value);
    setErrors((prev)=>({
      ...prev,
      [name]:errorMessage
    }))
  }
  const isFormValid=()=>{
    return(
      formData.name &&
      !errors.name &&
      formData.email&&
      !errors.email &&
      formData.employeeId&&
      !errors.employeeId&&
      formData.joiningDate&&
      !errors.joiningDate
    )
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(isFormValid()){
      alert("Form submitted successfully!")
      setFormData({
        name:"",
        email:"",
        employeeId:"",
        joiningDate:""
      })
      setErrors({
        name:"",
        email:"",
        employeeId:"",
        joiningDate:""
      })
    }
  }
  return (
    <div className="layout-column align-items-center mt-20 ">
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-name">
        <input
          className="w-100"
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          data-testid="input-name-test"
          onChange={handleChange}
        />
        { errors.name && <p className="error mt-2">
          Name must be at least 4 characters long and only contain letters and spaces
        </p> }
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-email">
        <input
          className="w-100"
          type="text"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange ={handleChange}
        />
        { errors.email && <p className="error mt-2">Email must be a valid email address</p>}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-employee-id">
        <input
          className="w-100"
          type="text"
          name="employeeId"
          value={formData.employeeId}
          placeholder="Employee ID"
          onChange={handleChange}
        />
        { errors.employeeId && <p className="error mt-2">Employee ID must be exactly 6 digits</p> }
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-joining-date">
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={formData.joiningDate}
          placeholder="Joining Date"
          onChange={handleChange}
        />
        {errors.joiningDate && <p className="error mt-2">Joining Date cannot be in the future</p>}
      </div>
      <button data-testid="submit-btn" type="submit"
      disabled ={!isFormValid()}
      onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidationForm;
