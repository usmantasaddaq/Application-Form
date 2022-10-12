import axios from "axios";
import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [cpassword, setCpassword] = useState("");
  
  var initialForm = {
    fname: "",
    // lname: "",
    email: "",
    password: "",
    // cpassword: "",
  };
  const fun = (state, action) => {
    switch (action.type) {
      case "fname":
        return { ...state, fname: action.payload };
      // case "lname":
      //   return { ...state, lname: action.payload };
      case "email":
        return { ...state, email: action.payload };
      case "password":
        return { ...state, password: action.payload };
      // case "cpassword":
      //   return { ...state, cpassword: action.payload };
    }
  };

  const [state, dispatch] = useReducer(fun, initialForm);

  const navigate = useNavigate();
  const SubmitForm = (e) => {
    console.log("initialForminitialForm", state);

 const Signup ={
  "name": state.fname,
    "email":state.email,
    "password":state.password
 }
      axios.post("https://taskforum.herokuapp.com/api/auth/signup", Signup);
  // data name  object > 3 things > required

  // axios.post('url',body: object);

    if (
      state.fname == "" ||
      state.email == "" ||
      state.password == "")
      {
        e.preventDefault();
        alert("First complete your form");
      } else {
        e.preventDefault();
        navigate("/Loginpage");
      } 
  };
  return (
    <>

      <form onSubmit={SubmitForm}>
        <div className="parents">
          <div className="Resgis_style">
            <label> First Name</label>
            <input
              className="inputR"
              type="text"
              placeholder="Enter Your FirstName"
              id="fname"
              autoComplete="off"
              //value={e.target.value}
              // onChange={(e) => setFname(e.target.value)}
              onChange={(e) =>
                dispatch({ type: "fname", payload: e.target.value })
              }
            />

            {/* <label>Last Name</label>
            <input
              className="inputR"
              type="text"
              placeholder="Enter Your LastName"
              id="lname"
              autoComplete="off"
              //value={lname}
              // onChange={(e) => setLname(e.target.value)}
              onChange={(e) =>
                dispatch({ type: "lname", payload: e.target.value })
              } 
            />*/}
            <label>Email</label>
            <input
              className="inputR"
              type="email"
              placeholder="Enter Your Email"
              id="email"
              autoComplete="off"
              //value={email}
              // onChange={(e) => setEmail(e.target.value)}
              onChange={(e) =>
                dispatch({ type: "email", payload: e.target.value })
              }
            />
            <h4>(e.g:-abc11@gmail.com)</h4>
            <label> Password </label>
            <input
              className="inputR"
              type="password"
              placeholder="Enter your Password"
              id="password"
              //value={password}
              // onChange={(e) => setPassword(e.target.value)}
              onChange={(e) =>
                dispatch({ type: "password", payload: e.target.value })
              }
              autoComplete="off"
            />
            <h4> (e.g:-abc@123) </h4>
            {/* <label> Confirm Password </label>
            <input
              className="inputR"
              type="password"
              placeholder="Enter your Password"
              id="cpassword"
              //value={cpassword}
              // onChange={(e) => setCpassword(e.target.value)}
              onChange={(e) =>
                dispatch({ type: "cpassword", payload: e.target.value })
              }
              autoComplete="off"
            /> */}
            <br />
            <button className="btn_SubmitR" type="submit">
              Register!
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Registration;
