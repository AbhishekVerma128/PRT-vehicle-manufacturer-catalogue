import React, { useEffect, useState } from 'react'

export default function VehicleDetail({setModal}) {
    const [locData,setLocData] = useState("")
   useEffect(()=>{
    setLocData(JSON.parse(localStorage.getItem("item")))
   
   },[])
   console.log(locData.Country);

    const handleItem=()=>{
        // console.log(locData);
    //    console.log( );
        setModal(false);
        localStorage.removeItem("item")
    }
  return (
  <div className='abc'>
   <h1>Details</h1>
     <h2 onClick={()=>handleItem()}>X</h2>
     <div className='detail-main'>
       
      <h4>{locData.Mfr_CommonName}</h4> 
      <h4>{locData.Country}</h4>
      <h4>{locData.VehicleTypes?locData.VehicleTypes[0].Name:"Motorcycle"}</h4>
      
    </div>
    
   
    </div>
  )
}
