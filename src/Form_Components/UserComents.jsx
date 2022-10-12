import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

 const UserComents=(props)=> {

    const myToken = localStorage.getItem("token");
    const[com,setCom]=useState([])
   
    useEffect(() => {
       
      const coments = async () => {
       
        const myCom= await axios.get(`https://taskforum.herokuapp.com/api/comment/user/${props.id._id}`,{ headers: { Authorization: `Bearer ${myToken}` } });

        setCom(myCom.data.data);
      }
      coments();
    }, []
    
    );

  return (
   <>
   <div className='styleing' >
    <div className="sidebarP">
   <button className="Editstylepp" onClick={()=>{
            props.setModel2(!props.model2)
        }    
        }> X </button>
        {com.map((e)=>(<h1>Post Comments:<br/>{e?.comment}</h1>))}
        
      </div>

      </div>
   </>
  )
}

export default UserComents;