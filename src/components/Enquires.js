import React,{useEffect,useState} from 'react'
import { getAllEnquires } from '../services/EnquiryService';
export default function Enquires() {
    const [proData,setProData]=useState([]);
    useEffect(()=>{
      getAllEnquires()
       .then(res=>{
         console.log(res.data);
         setProData(res.data)
       })
       .catch(err=> console.log(err));
    },[]);
    
    
  return (
    <>
      <h2> Enquries </h2>
      
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">mobile</th>
            <th scope="col">description</th>
          </tr>
        </thead>
        <tbody>
        {proData?.map((pro)=>
        
    <tr>
      <td>{pro.id}</td>
      <td>{pro.name}</td>
            <td>{pro.mobile_no }</td>
      <td>{pro.description}</td>
    </tr>
   
        
        
        )}
        </tbody>
      </table>
    </>
  )
}
