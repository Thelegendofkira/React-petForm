
import { useState } from "react"
export function Form({addpet}){
const [petData,setpetdata]=useState({
    name:'',
    type:'',
    age:'',
    description:''

});
const [errors,setErrors]=useState({});
function validate(){
    const errs={};
    if(!petData.name) errs.name="pet name required";
    if(!petData.type)errs.type="pet type requrired"
    if(!petData.age||petData.age<=0||isNaN(petData.age)) errs.age="pet age needs to be a valid number ";
     if (!petData.description) errs.description = 'Description is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
     
}
const handleChange= (e)=>{
    const {name,value}=e.target;
    setpetdata((prev)=>({...prev,[name]:value}) )
}
const handleSubmit=(e)=>{
    e.preventDefault();
    if(!validate())return
    addpet(petData)
    setpetdata({ name: '', type: '', age: '', description: '' });
    setErrors({});
}

    return (
     <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> 
        <form onSubmit={handleSubmit}>
        <h2>Pet Adoption Form</h2>
        <div style={{marginTop:"10px"}}>
            <label>PetName:</label><br/>
            <input type="text" name="name" value={petData.name} onChange={handleChange} 
            style={{
              backgroundColor: "transparent",
              border: "2px solid black ",  
              color: "black",  
              padding: "8px",
              width: "100%",
              borderRadius: "4px",
            }}
            />
            {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
        </div>
        <div style={{marginTop:"10px"}}>
            <label>Type:</label><br/>
            <input type="text" name="type" value={petData.type} onChange={handleChange}
            style={{
              backgroundColor: "transparent",
              border: "2px solid black ",  
              color: "black",  
              padding: "8px",
              width: "100%",
              borderRadius: "4px",
            }} />
            {errors.type && <p style={{color:"red"}}>{errors.type}</p>}
        </div>
        <div style={{marginTop:"10px"}}>
            <label>Age:</label><br/>
            <input type="number" name="age" value={petData.age} onChange={handleChange}
            style={{
              backgroundColor: "transparent",
              border: "2px solid black ",  
              color: "black",  
              padding: "8px",
              width: "100%",
              borderRadius: "4px",
            }}
            />
            {errors.age && <p style={{color:"red"}}>{errors.age}</p>}
        </div>
        <div style={{marginTop:"10px"}}>
            <label>Description:</label><br/>
            <input type="text" name="description" value={petData.description} onChange={handleChange} 
            style={{
              backgroundColor: "transparent",
              border: "2px solid black ", 
              color: "black",  
              padding: "8px",
              width: "100%",    
              borderRadius: "4px",
            }} />
            {errors.description && <p style={{color:"red"}}>{errors.description}</p>}
        </div>
        <button type="submit" style={{ marginTop: '20px',color:"white",backgroundColor:"black",borderRadius:"10px", width:"100px",
        padding:"8px 16px",transform:"translateX(50%)"
        }}>Add Pet</button>
     </form>
     </div>
    )

}