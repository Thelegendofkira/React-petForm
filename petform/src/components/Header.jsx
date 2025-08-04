import React from "react";
export function Header({children ,tooglepage}){
return (
    <nav style={{
          backgroundColor: "#c59771bd", 
          color:"white",
          textAlign:"center",
          padding:"16px 32px"
    }}>
        <div style={{
            position:"relative",
            height:"50px"
        }}>
            <h1 style={{
                margin:"0px",
                position:"absolute",
                left:"50%",
                top:"25%",
                fontSize:"24px",
                transform:"translateX(-50%)"

            }}
            >
                {children}
            </h1>
            <button style={{
                position:"absolute",
                right:0,
                top:"50%",
                 backgroundColor: "#815e44",
                 color:"white",
                 borderRadius:"8px",
                 border:"none",
                 padding:"8px 16px",
                 transform:"translateY(-50%)"
            }} onClick={tooglepage}>
                Home
            </button>
        </div>
    </nav>
)
}