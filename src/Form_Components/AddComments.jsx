import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const AddComments = (props) => {
    
    const myToken = localStorage.getItem("token");
    const[com,setCom]=useState([])
    



    useEffect(() => {
      const coments = async () => {
      
        const myCom= await axios.get("https://taskforum.herokuapp.com/api/comment/",{ headers: { Authorization: `Bearer ${myToken}` } });

        setCom(myCom.data.data);
        
        
      }
      coments();
    }, []);
    console.log("hello",com);
  return (
    <>
    <div className='styleing' >
   <div className="sidebarP">
   <button
            className="Editstylepp"
            onClick={() => {
              props.setModel7(!props.model7);
            }}
          >
            X
          </button>
<label>PostComments:</label>
<h1>{props.input.comment}</h1>
        {com?.map((c)=>( <>
             <h1>{c.comment}</h1> 
            </>)
          )}    
      </div>
      </div>

    </>
  );
};

export default AddComments;
