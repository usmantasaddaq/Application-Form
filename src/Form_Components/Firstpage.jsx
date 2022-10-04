import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Firstpage = () => {
  alert("Wellcome to our page");
  return (
    <>
      <div className="body_style">
        <div className="heading_style">
          <h1> Application Form </h1>
        </div>
        <div className="right_style">
          <button variant="login">
            <NavLink to="/Loginpage" className="textDecoration">
              Login🦋
            </NavLink>
          </button>
          <button>
            {" "}
            <NavLink to="/Registration" className="textDecoration">
              Registeration🦸‍♂️
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Firstpage;
