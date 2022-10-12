import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


function Post() {

  return (
    <>
      <div className="sidebar">
        <div>
          <h3> My Application </h3>
        </div>
        <div className="right_styleP">
          <button variant="profile">
            <NavLink to="/" className="textDecoration">
              Profile
            </NavLink>
          </button>
          <button variant="Setting">
            <NavLink to="/Profile" className="textDecoration">
              Setting
            </NavLink>
          </button>
          <button variant="Show All Post">
            <NavLink to="/Card" className="textDecoration">
              Show All Post
            </NavLink>
          </button>
          <div className="signout_Style">
            <button variant="SignOut">
              <NavLink to="/" className="textDecoration">
                SignOut
              </NavLink>
            </button>
          </div>
        </div>
      </div>

      {/* {data?.map((i) => 
        <Card variant="outlined" className="title_style">
          
          
          <div className="datastyle">
         <h3>{i.name}{i.title}{i.description}</h3></div>  
            
            
            </Card>
      )} */}
    </>
  );
}

export default Post;
