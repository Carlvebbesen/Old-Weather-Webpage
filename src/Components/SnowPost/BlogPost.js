import { Grid } from "@material-ui/core";
import React from "react";
import "./BlogPost.css";

const BlogPost = (props) => {
  console.log(props.description);
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className="BlogPostDescription"
      style={{ marginBottom: "5%" }}
    >
      <Grid item xs={11}>
        <p className="BlogPostTitle">
          {props.date.split("T")[0]} : {props.title}
        </p>
      </Grid>
      <Grid item xs={11}>
        {props.images === null ? null : (
          <img
            src={props.images}
            alt=""
            height="auto"
            style={{ display: "block", margin: "10px auto", maxWidth: "100%" }}
          />
        )}
      </Grid>
      <Grid item xs={10}>
        {props.description.split("\n").map((paragraph) => (
          <p className="BlogPostText">{paragraph}</p>
        ))}
      </Grid>
    </Grid>
  );
};

export default BlogPost;
