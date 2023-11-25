
import "./App.css";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Signup from "./Signup/Signup";
import Homepage from "./Homepage";
import Sidenav from "./navigation/Sidenav";

import Explore from "./Explore";
import { useEffect, useState } from "react";
import Profile from "./Profile"
import Reels from './Reels';
// import More from "./More";
import Search from "@mui/icons-material/Search";
import { Container } from "react-bootstrap";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
  
      <div className="App">
        <Container fluid>
          
       <Routes>
          <Route
            path="/"
            element={loggedIn ? <Homepage /> : <Login setLoggedIn={setLoggedIn} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path='/profile' element={<Profile/>}/>
          {/* <Route path="./more" element={<More/>}/> */}
          <Route path="./search" element={<Search/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path="/reels" element={<Reels/>}/>
         
          </Routes> 
          
    

          </Container>
      </div>
    
  );
}

export default App;