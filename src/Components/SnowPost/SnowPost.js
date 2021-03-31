import { Grid } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import "./SnowPost.css";
import Spinner from "../Spinner/Spinner";
import FnuggAxios from "../../Axios-instances/FnuggAxios";
import BlogPost from "./BlogPost";

const SnowPost = (props) => {
  const [blogPosts, setBlogPosts] = useState("");
  const [showPosts, setShowPosts] = useState(false);
  let loadSkiFrame = <Spinner />;
  let loadBlogPosts = null;

  const loadData = useCallback(async () => {
    try {
      if (props.id !== "") {
        const response = await FnuggAxios.get(
          `/search?index=blog&facet=site:${props.id}&sort=date:desc`
        );
        let size = 4;
        if (response.data.hits.hits.size < size) {
          size = response.data.hits.hits.size;
        }
        setBlogPosts(response.data.hits.hits.slice(0, size));
      }
    } catch (e) {
      console.log(e);
    }
  }, [props.id]);

  useEffect(() => loadData(), [loadData]);

  const toggleshowPosts = () => {
    const booleanPost = showPosts;
    setShowPosts(!booleanPost);
  };

  if (props.id !== "") {
    loadSkiFrame = (
      <iframe
        loading="eager"
        title="Skisenter"
        className="SkisenterIframe"
        src={`https://fnugg.no/widget/resort/?id=${props.id}&theme=light`}
        frameBorder="0"
      />
    );
  }
  if (blogPosts !== "") {
    loadBlogPosts = (
      <Grid
        container
        direction="colomn"
        justify="space-around"
        alignItems="center"
      >
        {blogPosts.map((post) => (
          <Grid item xs={12}>
            <BlogPost
              key={post._id}
              title={post._source.title}
              date={post._source.date}
              description={post._source.description}
              images={
                post._source.images === null
                  ? null
                  : post._source.images.image_1_1_s
              }
            />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <div className="SnowPostFrame">
      {loadSkiFrame}
      {blogPosts === "" ? null : (
        <p onClick={() => toggleshowPosts()} className="SnowPostTitle">
          Trykk for oppdateringer fra Alpinsenteret
        </p>
      )}
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        {showPosts ? loadBlogPosts : null}
      </Grid>
      {/* <p className="SnowPostTitle" onClick={() => history.push("./fnugg.no/")}>
        Mer info her ved å trykke her
      </p> */}
    </div>
  );
};

export default SnowPost;
