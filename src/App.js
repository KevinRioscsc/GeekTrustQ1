import "./App.css";
import Board from "./Components/Board/Board";
import Search from "./Components/Search/Search";
import Row from "./Components/DataRow/Row";
import useFetch from "./Hooks/useFetch";
import React, { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const { response } = useFetch(
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
  );
  console.log(response);
 

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = response.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="Margin">
      <Search />
      <Row />
      {response.map((item, index) => {
        return <Row {...item} key={index + item.id} />;
      })}
    </div>
  );
}

export default App;
