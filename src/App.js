import "./App.css";
import Loginpage from "./Form_Components/Loginpage";
import Registration from "./Form_Components/Registration";
import { Route, Routes,useNavigate,NavLink} from "react-router-dom";
import Post from './Form_Components/Post';
import  Card from './Form_Components/Card';

import Edit from './Form_Components/Edit';
import Setting from "./Form_Components/Setting";
import Postinfo from './Form_Components/Postinfo';
import  UserComents from './Form_Components/UserComents';
import Createpost from './Form_Components/Createpost';
import PostComments from './Form_Components/PostComments';
import ShowComments from './Form_Components/ShowComments';
import AddComments from './Form_Components/AddComments';
const App = () => {
  return (
    <>
          {/* <Post /> */}
      <div>
        <Routes>
        
          <Route exact path="/" element={<Loginpage />} />
        
          <Route exact path="/Registration" element={<Registration />} />
          <Route exact path="/Post" element={<Post />}/>
          <Route exact path="/Card" element={<Card/>}/>
          <Route exact path="/ShowComments" element={<ShowComments/>}/>
          <Route exact path="/Edit" element={<Edit/>}/>
          <Route exact path="/Profile" element={<Setting/>}/>
          <Route exact path="/Postinfo" element={<Postinfo/>}/>
          <Route exact path="/UserComents" element={<UserComents/>}/>
          <Route exact path="/Createpost" element={<Createpost/>}/>
          <Route exact path="/PostComments" element={<PostComments/>}/>
          <Route exact path="/AddComments" element={<AddComments/>}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
