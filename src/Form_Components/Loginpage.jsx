import React, { useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setALLData] = useState([]);
  const navigate = useNavigate();

  const SubmitForm = async (e) => {
    if (email == "" || password == "") {
      e.preventDefault();

      alert("Email/password is empty!");
    } else {
      e.preventDefault();
      const NewData = { email: email, password: password };
      const res = await axios.post(
        "https://taskforum.herokuapp.com/api/auth/signin",
        NewData
      );
      const answer = res.data.token;
      sessionStorage.setItem("token", answer);
      localStorage.setItem("token", answer);

      // log res.data.token

      // console.log("answe",NewData)
      setALLData([...data, NewData]);

      // if validate
      navigate("/Post");
    }
  };
  return (
    <>
      <form onSubmit={SubmitForm}>
        <div className="body_style">
          <div className="heading_style">
            <h1> MY APP </h1>
          </div>
          <div className="right_style">
            <button>
              <NavLink to="/Registration" className="textDecoration">
                Registeration🦸‍♂️
              </NavLink>
            </button>
          </div>
          <div className="login_style">
            <div className="input_style">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <h5>( e.g:-abc11@gmail.com)</h5>
              <label> Password </label>
              <input
                type="password"
                placeholder="Enter your Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
              <h5>(e.g:-abc@123)</h5>
              <div className="butt">
                <Button color="secondary" type="submit">
                  Login🦋
                </Button>
                <Button color="secondary">
                  <NavLink to="/Post" className="textDecoration">
                    Forget🦋
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Loginpage;
