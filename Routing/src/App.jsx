import React, { useState } from "react";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Profile from "./components/Profile";

function App(){
  const [activePage, setActivePage] = useState("Home");
  
    return(
        <div>
          <button onClick={() => setActivePage("Home")}>Home</button>
          <button onClick={() => setActivePage("Explore")}>Explore</button>
          <button onClick={() => setActivePage("Profile")}>Profile</button>

          {activePage == "Home" ? <Home/> :
          activePage == "Explore" ? <Explore/> : <Profile/>}

          {/* <Home/>
          <Explore/>
          <Profile/> */}
        </div>
    )
}

export default App