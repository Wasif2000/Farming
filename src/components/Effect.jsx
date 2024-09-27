import React, { useState } from 'react'

const Effect = () => {
    const [name ,setName] = useState("wasif")
  return (
    <>
    <h1>My name is {name}</h1> 
    <button onClick={()=>{
        setName("Wasif Ali")
    }}>Change Name</button>   
    </>
  )
}

export default Effect