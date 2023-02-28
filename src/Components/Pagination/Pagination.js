import React, { useState } from "react";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import "./style.css";
//
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const [currentPage, setPage] = useState(1);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const doubleArrow = () => {
    currentPage(1);
    paginate(1);
  };
  const arrow = (direction) => {
    switch (direction) {
      case "left":
        if (currentPage !== 1) {
          setPage((prev) => prev - 1);
          paginate(currentPage);
        }
      case "right":
        if (currentPage !== pageNumbers.length) {
          paginate(currentPage);
          setPage((prev) => prev + 1);
        }
    }
  };
  return (
    <nav className="pagination">
      <div
        className={`doubleArrowLeft  ${
          currentPage === 1 ? "disable" : "circle"
        }`}
      >
        <RxDoubleArrowLeft size={30} onClick={doubleArrow} />
      </div>
      <div
        className={`doubleArrowLeft  ${
          currentPage === 1 ? "disable" : "circle"
        }`}
      >
        <RiArrowLeftSLine size={30} onClick={() => arrow("left")} />
      </div>
      <ul className="pages">
        {pageNumbers.map((item) => (
          <li className="page-item ">
            <a
              href="!#"
              onClick={() => {
                setPage(item);
                paginate(item);
              }}
              className={`${currentPage === item ? "active" : "circle"}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div
        className={`doubleArrowLeft  ${
          currentPage === pageNumbers.length ? "disable" : "circle"
        }`}
      >
        <RiArrowRightSLine size={30} onClick={() => arrow("right")} />
      </div>
      <div
        className={`doubleArrowLeft  ${
          currentPage === pageNumbers.length ? "disable" : "circle"
        }`}
      >
        <RxDoubleArrowRight size={30} />
      </div>
    </nav>
  );
};

export default Pagination;
