import React from "react"
import './App.css';
import { Routes, Route, Link} from "react-router-dom";
import BottomNavbar from './Components/BottomNavbar';
import Home from "./routes/Home";
import CreateActivity from "./routes/CreateActivity";
import Settings from "./routes/Settings";
import Profile from "./routes/Profile";
import History from "./routes/History";


function App() {
  
    return (
        <>
       

      
      <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />}/>
          <Route path="/history" element={<History/>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/createactivity" element={<CreateActivity />} />

        </Routes>
        <BottomNavbar />
        
        </>
    );
  }
  
  export default App;
  