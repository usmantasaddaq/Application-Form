import React from "react";
import { NavLink } from "react-router-dom";
import Post from "./Post";
import { useState, useEffect } from "react";
import axios from "axios";
import ShowComments from "./ShowComments";
import Postinfo from "./Postinfo";
import UserComents from "./UserComents";
import Createpost from "./Createpost";
import Edit from "./Edit";
import PostComments from './PostComments';
import AddComments from "./AddComments";
const Card = (props) => {
  const myToken = sessionStorage.getItem("token");
  const [data, setData] = useState([]);
  const [model, setModel] = useState(false);
  const [model2, setModel2] = useState(false);
  const [model3, setModel3] = useState(false);
  const [model4, setModel4] = useState(false);
  const [model5, setModel5] = useState(false);
  const [model6, setModel6] = useState(false);
  const [model7, setModel7] = useState(false);
  const [myOneData, setmyOneData] = useState([]);
  const [myOneCom, setmyOneCom] = useState([]);
  const[Comments,setComments]=useState([])
  const [edit, setEdit] = useState([]);
  const[Addcoment,setAddcoment]=useState([])
  const[input,setInput]=useState([])
  const fetch = async () => {
    const myData = await axios.get(
      "https://taskforum.herokuapp.com/api/post/",
      { headers: { Authorization: `Bearer ${myToken}` } }
    );
    setData(myData?.data.data);
  };

  useEffect(() => {
    fetch();
  },[model2, model3, model4, model5 , model6, model7]);
  console.log(model);
  return (
    <>
      <div>
     
        <button
          className="Editstyle"
          onClick={() => {
            setModel3(!model3);
          }}
        >
       Create Post
       
        </button>
        <button
          className="Editstyle"
          onClick={() => {
            setModel6(!model6);
          }}
        >
       Show All Comments
       
        </button>
      </div>
      <div className="cardflow_style">
        {data?.map((e) => (
          <div className="content" key={e._id}>
            <div className="Card_style">
              <h1>Name:{e?.user?.name}</h1>
              {/* <h1>ID:{e?.user?._id}</h1> */}
              <h2>Title:{e.title}</h2>

              <button
                className="Editstyle"
                onClick={() => {
                  setEdit(e);
                  setModel4(!model4);
                }}
              >
                Edit
              </button>
              <h4>Category:{e.category}</h4>
              <h4>Discription:{e.description}</h4>

              <h4>Comments:</h4>
              <textarea
                className="Comments_Style"
                onClick={() => {
                  setmyOneCom(e);
                  setModel2(!model2);
                }}
              ></textarea>
               <button
                className="EditstyleP"
                onClick={() => {
                  setComments(e);
                  setModel5(!model5);
                }}>See More...</button>
           

              <input
                className="comments_style"
                type="comment"
                placeholder="Comments"
                onClick={setInput(e.target.value)}

              />
              <button
                className="styleP"
                onClick={() => {
                  setAddcoment(e);
                  setModel7(!model7);
                }}
              >
            Post
              </button>
              <button
                className="EditstyleP"
                onClick={() => {
                  setmyOneData(e);
                  setModel(!model);
                }}
              >
            PostInformation
              </button>
            </div>
          </div>
        ))}

        {model && (
          <Postinfo data={myOneData} setModel={setModel} model={model} />
        )}

        {model2 && (
          <UserComents id={myOneCom} setModel2={setModel2} model2={model2} />
        )}
        {model3 &&( <Createpost setModel3={setModel3} model3={model3} />)}
        {model4 && (<Edit id={edit} setModel4={setModel4} model4={model4} />)}
        {model5 && (<PostComments id={Comments} setModel5={setModel5} model5={model5} />)}
        {model6 &&( <ShowComments setModel6={setModel6} model6={model6} />)}
        {model7 && (<AddComments value={input} setModel7={setModel7} model7={model7}/>)}
      </div>
      </>
  );
};

export default Card;
