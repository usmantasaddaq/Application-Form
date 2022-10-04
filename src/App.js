import "./App.css";
import Loginpage from "./Form_Components/Loginpage";
import Registration from "./Form_Components/Registration";
import Form from "./Form_Components/Form";
import Submit from "./Form_Components/Submit";
import Firstpage from "./Form_Components/Firstpage";
import Forget from "./Form_Components/Forget";
import { Route, Routes,useNavigate} from "react-router-dom";

const App = () => {
  return (
    <>
      <Firstpage />
      <div>
        <Routes>
          {/* <Route path="/" element={<Firstpage/>} /> */}
          <Route exact path="/Loginpage" element={<Loginpage />} />
          <Route exact path="/Registration" element={<Registration />} />
          <Route exact path="/Form" element={<Form/>} />
          <Route exact path="/Forget" element={<Forget />}/>
          <Route exact path="/Submit" element={<Submit />}  />
        </Routes>
      </div>
    </>
  );
};

export default App;
