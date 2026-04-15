import React, { useState } from "react";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Profile from "./components/Profile";
import Photos from "./components/Photos";
import Reels from "./components/Reels";
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
            <Link to="/profile">Profile</Link>
          </nav>

          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/profile' element={<Profile/>}>
              <Route path='/profile/photos' element={<Photos/>}/>
              <Route path='/profile/reels' element={<Reels/>}/>
            </Route>
            
          </Routes>
        </div>
    )
}

export default App