import axios from "axios";
import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const Createpost = (props) => {
  const myToken = sessionStorage.getItem("token");
  var initialPost = {
    title: "",
    category: "",
    description: "",
  };
  const fun = (state, action) => {
    switch (action.type) {
      case "title":
        return { ...state, title: action.payload };

      case "category":
        return { ...state, category: action.payload };
      case "description":
        return { ...state, description: action.payload };
    }
  };

  const [state, dispatch] = useReducer(fun, initialPost);

  const navigate = useNavigate();
  const SubmitForm = (e) => {
  

    const Create = {
      title: state.title,
      category: state.category,
      description: state.description,
    };
    axios.post("https://taskforum.herokuapp.com/api/post/", Create, {
      headers: { Authorization: `Bearer ${myToken}` },
    });

    if (state.title == "" || state.category == "" || state.description == "") {
      e.preventDefault();
      alert("First complete your form");
    } else {
      e.preventDefault();
      props.setModel3(!props.model3);
    }
  };
  return (
    <>
     <div className="sidebarP">
   <button className="Editstylepp" onClick={()=>{
            props.setModel3(!props.model3)
        }    
        }> X </button>
        
      <form onSubmit={SubmitForm}>
        <div className="parents">
          <div className="Resgis_style">
            <label> Title</label>
            <input
              className="inputR"
              type="text"
              placeholder="Enter Your title"
              id="title"
              autoComplete="off"
              onChange={(e) =>
                dispatch({ type: "title", payload: e.target.value })
              }
            />

            <label>Category</label>
            <input
              className="inputR"
              type="text"
              placeholder="Enter Your category"
              id="category"
              autoComplete="off"
              onChange={(e) =>
                dispatch({ type: "category", payload: e.target.value })
              }
            />

            <label> Description </label>
            <input
              className="inputR"
              type="text"
              placeholder="Enter your description"
              id="description"
              onChange={(e) =>
                dispatch({ type: "description", payload: e.target.value })
              }
              autoComplete="off"
            />
            <br />
            <button className="btn_SubmitR" type="submit" >
              Post Create
            </button>
           

          </div>
        </div>
      </form>
              
      </div>
    </>
  );
};

export default Createpost;

