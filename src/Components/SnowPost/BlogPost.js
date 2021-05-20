import { Grid } from "@material-ui/core";
import React from "react";
import styles from "../../modules/BlogPost.module.css";

const BlogPost = (props) => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={styles.BlogPostDescription}
      style={{ marginBottom: "5%" }}
    >
      <Grid item xs={11}>
        <p className={styles.BlogPostTitle}>
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
          <p className={styles.BlogPostText}>{paragraph}</p>
        ))}
      </Grid>
    </Grid>
  );
};

export default BlogPost;
