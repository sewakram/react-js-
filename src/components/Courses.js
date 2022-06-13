import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { getAllCourses } from '../services/CoursesService'
export default function Products() {
    const [proData,setProData]=useState([]);
    useEffect(()=>{
       getAllCourses()
       .then(res=>{
         console.log(res.data);
         setProData(res.data)
       })
       .catch(err=> console.log(err));
    },[]);
    
    
  return (
    <>
      <h2> Courses </h2>
      <div className='row container'>
        {proData?.map((pro)=>
        <div className='col-sm-4' key={pro.id}>
              <div class="card" style={{width: '18rem'}}>
  <img src={pro.image} class="card-img-top" alt="..." width={150} height={150}/>
  <div class="card-body">
    <h5 class="card-title">{pro.cname}</h5>
    {/* <p class="card-text"> Price : {pro.price}</p> */}
    <Link to={`/CreateEnquiry/${pro.id}`} class="btn btn-info">Make Enquiry</Link>
    {/* <Link to={`/editpro/${pro.id}`} class="btn btn-primary">Edit</Link> */}
    {/* <button class="btn btn-danger" onClick={()=> delPro(pro.id)}> Delete</button> */}
  </div>
</div>
        </div>)}
      </div>
    </>
  )
}
