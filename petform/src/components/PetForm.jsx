import React from "react";
export function PetForm({pets}){
if(pets.length==0){
    return( <p style={{color:"white"}}>No Pets Added</p>)
}
return(
   <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
     <div style={{ width: "80%", maxWidth: "900px", backgroundColor: "#ffffffcc", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 12px black" }}>
        
        <h2  style={{ textAlign: "center", color: "#333", marginBottom: "15px" }}>Pet List</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
            
            <thead>
            <tr style={{ backgroundColor: "#c59771bd", color: "white", textAlign: "left", padding: "12px" }}>
                <th style={headcellstyle}>Name</th>
                <th style={headcellstyle}>Type</th>
                <th style={headcellstyle}>Age</th>
                <th style={headcellstyle}>Description</th>
            </tr>
        </thead>
        <tbody>
            {pets.map((pet,index)=>(
                <tr key={index}  style={{
                  backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#f1f1f1",
                  transition: "background-color 0.3s ease",
                }}>
                    <td style={cellstyle}>{pet.name}</td>
                    <td style={cellstyle}>{pet.type}</td>
                    <td style={cellstyle}>{pet.age}</td>
                    <td style={cellstyle}>{pet.description}</td>
                </tr>
            ))}
        </tbody>

        </table>

    </div>
   </div>
)


}
const headcellstyle={ padding: "12px" };
const cellstyle={ padding: "12px", textAlign: "left" };