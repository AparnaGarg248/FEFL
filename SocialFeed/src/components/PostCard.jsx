import React from "react"
import CommentItem from "./CommentItem";

function PostCard(props){
    return(
        <div>
            <h2>{props.post.username}</h2>
            <p>{props.post.content}</p>
            <p style={{
                color: props.post.likes > 50 ? "red" : "black",
                fontWeight: props.post.likes > 50 ? "bold" : "normal"
                }}>
                Likes: {props.post.likes}
            </p>
            <h4>User Comments</h4>
            <ul>
                {props.post.comments.map((comment, index) => (
                    <CommentItem key={index} text={comment} />
                ))}
            </ul>
        </div>
    )
}

export default PostCard;