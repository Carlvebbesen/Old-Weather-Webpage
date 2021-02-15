import React from "react";
import "./BlogPost.css";

const BlogPost= (props)=>{
    return (
        <div style={{marginBottom: "5%"}}>
            <p className="BlogPostTitle">{props.date.split("T")[0]} : {props.title}</p>
            <div className="BlogPostDescription">
                {props.images===null ? null : <img className="BlogPostImage" src={props.images} alt="" height="300px"/>}
                <p className="BlogPostImage">{props.description}</p>
            </div>
        </div>
    );
}

export default BlogPost;