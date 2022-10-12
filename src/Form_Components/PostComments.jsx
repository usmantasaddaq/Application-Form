import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const PostComments = (props) => {
    
    const myToken = localStorage.getItem("token");
    const[com,setCom]=useState([])
    



    useEffect(() => {
      const coments = async () => {
        let post_id = props.id._id;
        console.log("post_id",post_id);
        const myCom= await axios.get(`https://taskforum.herokuapp.com/api/comment/post/${post_id}`,{ headers: { Authorization: `Bearer ${myToken}` } });

        setCom(myCom.data.data);
        
        
      }
      coments();
    }, []);
    console.log("hello",com);
  return (
    <>
    <div className='styleing' >
   <div className="sidebarP">
   <button className="Editstylepp" onClick={()=>{
            props.setModel5(!props.model5)
        }
        }> X </button>
<label>PostComments:</label>
          {com?.map((c)=>( <>
             <h1>{c.comment}</h1> 
            </>)
          )}    
      </div>
      </div>

    </>
  );
};

export default PostComments;
