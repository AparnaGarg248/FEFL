import React from "react";
import { Link, Outlet } from "react-router-dom";

function Profile(){
    return(
        <div>
            <h1>Profile Screen</h1>
            <p>name : Aparna
            following: 248</p>
            
            <nav style={{
            display: "flex",
            gap: "20px"
          }}>
            <Link to="/profile/photos">Photos</Link>
            <Link to="/profile/reels">Reels</Link>
          </nav>

          <Outlet/>
        </div>
    )
}

export default Profile