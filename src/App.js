import "./App.css";
import Post from "./Components/Post/Post";
import Search from "./Components/Search/Search";
import Row from "./Components/DataRow/Row";
import useFetch from "./Hooks/useFetch";
import Pagination from "./Components/Pagination/Pagination";
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
  const currentPosts = response?.slice(indexOfFirstPost, indexOfLastPost);

  //change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="Margin">
      <Search />
      <Row />
      <Post currentPost={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={response?.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
