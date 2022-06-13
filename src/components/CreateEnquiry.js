import React,{useState} from 'react'
import { addEnquiry } from '../services/EnquiryService';
import { useNavigate, useParams } from 'react-router-dom';
export default function CreateEnquiry() {
    const [state, setState] = useState({cid: '',name:'',mobile_no:'',description:''});
    const navigate=useNavigate();
    const { cid } = useParams();
    const handler=(event)=>{
     const {name,value}=event.target;
        
        setState({ ...state, [name]: value, cid: cid });
    }
    const postData=(event)=>{
           event.preventDefault();
        addEnquiry(state)
           .then(res=>{
               if(res.data){
                   alert("Enquiry created");
                   navigate("/");
               }
           })
           .catch(err=> console.log(err))
    }
  return (
    <div>
        <h1> Create Enquiry</h1>
        <form onSubmit={postData}>
            <div className='form-group'>
                <label> name</label>
                <input type="text" name="name" className='form-control' onChange={handler}/>
            </div>
            <div className='form-group'>
                <label> Mobile Number</label>
                <input type="text" name="mobile_no" className='form-control' onChange={handler}/>
            </div>
            <div className='form-group'>
                <label> Description</label>
                <textarea name="description" className='form-control' onChange={handler}></textarea>
            </div>
            
            <input type="submit" value="Add" className='btn btn-success'/>
        </form>
    </div>
  )
}
 