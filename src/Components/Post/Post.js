import React from "react";
import Row from "../DataRow/Row";

const Post = ({ currentPost }) => {
  return (
    <>
      {currentPost?.map((item, index) => {
        return <Row {...item} />;
      })}
    </>
  );
};

export default Post;
