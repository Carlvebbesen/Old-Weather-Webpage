import React from "react";
import "./PagesFrame.css";

const PagesFrame = (props) => {
  return (
    <div className="FramePages">
      {props.title !== "" ? (
        <p className="PagesFrameTitle">{props.title}</p>
      ) : null}
      {props.children}
      <p className="FnuggCopyRight">{props.copyRight}</p>
    </div>
  );
};

export default PagesFrame;
