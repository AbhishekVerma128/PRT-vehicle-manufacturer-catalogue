import React, { useEffect } from 'react'
import "./Home.css"
import { useState } from 'react';
import VehicleDetail from './VehicleDetail';
export default function Home() {
    const [modal,setModal]= useState(false);
    const [result, setResult]=useState([])

    console.log(result[0]);
    const itemDetails=(data)=>{
        setModal(true)
        localStorage.setItem("item",JSON.stringify(data))
    }
    useEffect(()=>{
     fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json")
     .then((res)=>res.json()).then((data)=>setResult(data.Results))
    },[])
  return (
    <>
    {modal?
    <div className='veh-detail'>
    <VehicleDetail setModal={setModal}/>
    </div> 
    :null}
    <div className='container'>
      <div className='header mt-3'>
      <h1>Vehicle Manufacturer Catalogue</h1>
      </div>
      <div className='srch-bar mt-3'>
        <div>
        <label htmlFor="">Search :</label>
        <input type="search" />
        </div>
        <div>
            <label htmlFor="">Filter</label>
            <select name="" id="">
                <option value="">All</option>
                <option value="">Name</option>
            </select>
        </div>
      </div>
      <div className='vehicle-table mt-4 '>
        <table class="table table-striped">
  <thead>
    <tr className='bg-primary'>
      <th scope="col">Name</th>
      <th scope="col">country</th>
      <th scope="col">Type</th>
    </tr>
  </thead>
  <tbody>

    {result.map((data)=>{
        return (
         <tr onClick={()=>itemDetails(data)}>
         <td>{data.Mfr_CommonName}</td>
         <td>{data.Country}</td>
         <td>{data.VehicleTypes[0]?data.VehicleTypes[0].Name:"Motorcycle"}</td>
    </tr>
        )
    })}
  </tbody>
</table>
        </div>
    
 </div>
 </>
  )
}
