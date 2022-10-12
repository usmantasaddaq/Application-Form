import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";



const ShowComments = (props) => {


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
   <button className="Editstylepp" onClick={()=>{
            props.setModel6(!props.model6)
        }    
        }> X </button>
       {com?.map((elem)=>(
         <> 
         <div> <div className="Commentstyle"><h4>Comments:{elem.comment}
         </h4>
        
         </div>
         </div>
         </>
      ))}

      </div>

      </div>
    </>
  );
};

export default ShowComments;
