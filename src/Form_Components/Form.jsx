import React from "react";
import { Data } from "./Data";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
const Form = () => {
  var initialForm = {
    firstName: "",
    lastName: "",
    Email: "",
    address1: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    jobtitle: "",
    experience: "",
    experience: "",
    reason: "",
  };
  const fun = (state, action) => {
    
    switch (action.type) {
      case "firstName":
        return { ...state, "firstName": action.payload };
      case "lastName":
        return { ...state, "lastName": action.payload };
      case "Email":
        return { ...state, "Email": action.payload };
      case "address1":
        return { ...state, "address1": action.payload };
      case "city":
        return { ...state, "city": action.payload };
      case "state1":
        return { ...state, "state1": action.payload };
      case "zip":
        return { ...state, "zip": action.payload };
      case "phone":
        return { ...state, "phone": action.payload };
      case "jobTitle":
        return { ...state, "jobTitle": action.payload };
      case "experience1":
        return { ...state, "experience1": action.payload };
      case "experience":
        return { ...state, "experience": action.payload };
      case "reason":
        return { ...state, "reason": action.payload };
    }
  };

  const [state, dispatch] = useReducer(fun, initialForm);

  const navigate = useNavigate();
  const SubmitForm = (e) => {
    console.log(state);
    e.preventDefault();
    if (
      state.firstName == "" ||
      state.lastName == "" ||
      state.Email == "" ||
      state.address1 == "" ||
      state.city == "" ||
      state.state1 == "" ||
      state.zip == "" ||
      state.phone == "" ||
      state.jobTitle == "" ||
      state.experience1 == "" ||
      state.experience == "" ||
      state.reason == ""
    ) {
      alert("First complete your form");
    } else {
      e.preventDefault();
      navigate("/Submit");
    }
  };

  return (
    <>
      <form onSubmit={SubmitForm}>
        <div className="form_style">
          <h1 className="Heading_style"> ✏ APPLICATION FORM ✏ </h1>

          <div>
            <div className="style_form">
              
              {Data.map((dat) => {
                if (dat.id == "jobTitle") {
                  return (
                    <>
                      <label className="experience_style">{dat.label}</label>
                      <select className="options_style">
                        {dat.options.map((el) => (
                          <option>{el}</option>
                        ))}
                      </select>
                    </>
                  );
                } else if (dat.type == "radio") {
                  return (
                    <>
                      <label className="experience_style">{dat.label}</label>
                      {dat.options.map((e2) => {
                        return (
                          <>
                          <div className="radio_style">
                            <input  
                              type="radio"
                              defaultChecked
                              name="experiance1"
                              value={e2}
                            />
                            <label>{e2}</label>
                            </div>
                          </>
                        );
                      })}
                    </>
                  );
                } else if (dat.id == "experience") {
                  return (
                    <>
                      <label className="experience_style">{dat.label}</label>
                      <select className="options_style">
                        {dat.options.map((el) => (
                          <option>{el}</option>
                        ))}
                      </select>
                    </>
                  );
                }
                return (
                  <>
                    <label className="stylelabe">{dat.label}</label>
                    <input
                      type={dat.type}
                      placeholder={dat.placeholder}
                      id={dat.id}
                      required={dat.required}
                      onChange={(e) =>
                        dispatch({ type: dat.id, payload: e.target.value })
                      }
                    />
                  </>
                );
              })}
            </div>
           
            <button className="btn_Submit" type="submit">
              Submit!
            </button>
      
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
