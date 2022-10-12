import React from "react";
import Post from "./Post";
import { NavLink } from "react-router-dom";
const Profile = () => {
  return (
    <>
      <Post />
      <div className="content">
        <div className="Card_style">
          <label>Name: </label>
          <input
            className="comments_style"
            type="Name"
            placeholder="Edit your Name"
          />
          <br />
          <br />
          <label>Emai: </label>
          <input
            className="comments_style"
            type="Email"
            placeholder="your Email"
          />
          <br />
          <br />
          <button variant="Updated">
            <NavLink to="/Post" className="textDecoration">
              Update
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
