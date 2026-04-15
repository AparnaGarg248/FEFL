import React, { useState } from "react";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Profile from "./components/Profile";
import { Link, Routes, Route } from "react-router-dom"

function App(){
    return(
        <div>
          <nav style={{
            display: "flex",
            gap: "20px"
          }}>
            <Link to="/home">Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/profile/:username">Profile</Link>
          </nav>

          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
        </div>
    )
}

export default App