import React from "react";
import { useParams } from "react-router-dom";

function Profile(){
    let urlData = useParams()
    return(
        <div>
            <h1>Profile Screen</h1>
            <p>name : {urlData.username}</p>
            following: 248
        </div>
    )
}

export default Profile