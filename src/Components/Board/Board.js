import React from "react";
import Row from "../DataRow/Row";

const Board = ({ response, loading }) => {
  return (
    <>
      {response.map((item, index) => {
        return <Row {...item} key={index + item.id} />;
      })}
    </>
  );
};

export default Board;
