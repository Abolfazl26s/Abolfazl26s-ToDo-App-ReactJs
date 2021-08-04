import React, { useState } from "react";

const Footer = ({ itemCount, handelFilterTasks }) => {
  const [filter, setFilter] = useState("all");

  const handelFilter = (filterName) => {
    setFilter(filterName);
    handelFilterTasks(filterName);
  };

  return (
    <footer>
      <div className="actions">
        <ul className="actionsList">
          <li className="listItem">
            <button
              className={filter === "all" ? "active" : ""}
              onClick={() => {
                handelFilter("all");
              }}
            >
              همه
            </button>
          </li>
          <li className="listItem">
            <button
              onClick={() => {
                handelFilter("active");
              }}
              className={filter === "active" ? "active" : ""}
            >
              در حال انجام
            </button>
          </li>
          <li className="listItem">
            <button
              className={filter === "completed" ? "active" : ""}
              onClick={() => {
                handelFilter("completed");
              }}
            >
              انجام شده
            </button>
          </li>
        </ul>
      </div>
      <div className="countItem">{itemCount}</div>
    </footer>
  );
};

export default Footer;
