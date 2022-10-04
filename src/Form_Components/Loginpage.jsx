import React from 'react'
import Button from '@mui/material/Button';
import { NavLink,useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Loginpage=()=> {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [data, setALLData] = useState([]);
  const navigate= useNavigate();
 const SubmitForm=(e)=>{
    if(email==''|| password==''){
      e.preventDefault();
      alert("Email/password is empty!")
    }else{
      e.preventDefault();
      const NewData={email:email,password:password};
      console.log("answe",NewData)
      setALLData([...data,NewData])
      
      // if validate
      navigate("/Form")}
 
  }

  return (
<>
<form  onSubmit={SubmitForm}>
  
        
       <div className='login_style'>
           <div className='input_style'>
       <label>Email</label>
        <input type="email"placeholder="Enter Your Email"   id="email" autoComplete='off'  value={email} onChange={(e)=>setEmail(e.target.value)}
               />
      
       <h5>( e.g:-abc11@gmail.com)</h5>
        <label> Password </label>
        <input type="password" placeholder='Enter your Password'  id="password" value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete='off'/>
        <h5>(e.g:-abc@123)</h5>
               <div className='butt'>
        <Button  color="secondary" type='submit'>Login🦋</Button>
       <Button color="secondary"><NavLink to="/Form" className="textDecoration">Forget🦋</NavLink></Button>
       </div>
      </div>
       </div>
  
    </form>


    </>
    );
 
  }

  


export default Loginpage;