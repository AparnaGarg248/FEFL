import React from "react";

function CommentItem({text}){
  return (
    <li style={{ backgroundColor: "lightgray", padding: "5px" }}>
      {text}
    </li>
  );
}

export default CommentItem;