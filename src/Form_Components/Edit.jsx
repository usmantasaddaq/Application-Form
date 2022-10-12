import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { NavLin } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { upload } from "@testing-library/user-event/dist/upload";

const Edit = (props) => {
  const myToken = sessionStorage.getItem("token");

  const [ttle, setTitle] = useState(props.id.title);
  const navigate = useNavigate();

  const Submit = () => {
    const Update = {
      title: ttle,
      category: props?.id.category,
      description: props?.id.description,
    };
    axios.put(
      `https://taskforum.herokuapp.com/api/post/${props.id._id}`,
      Update,
      {
        headers: { Authorization: `Bearer ${myToken}` },
      }
    );
    props.setModel4(!props.model4);
  };
  const Delete = () => {
    axios.delete(`https://taskforum.herokuapp.com/api/post/${props.id._id}`, {
      headers: { Authorization: `Bearer ${myToken}` },
    });
    props.setModel4(!props.model4);
  };

  return (
    <>
      <div className="styleing">
        <div className="sidebarP">
          <button
            className="Editstylepp"
            onClick={() => {
              props.setModel4(!props.model4);
            }}
          >
            X
          </button>
          <h2>Title:{ttle}</h2>

          <input
            type="text"
            value={ttle}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <h4>Category:{props?.id.category}</h4>
          <h4>Discription:{props?.id.description}</h4>
          <button className="Editstyle" onClick={Submit}>
            Update
          </button>
          <button onClick={Delete}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default Edit;
