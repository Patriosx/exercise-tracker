import React from "react";
import "./tabfilter.css";
const TabFilter = ({ filterHandler, filter }) => {
  function selectFilter(e) {
    // setFilter(e.target.value);
    filterHandler(e.target.attributes.alt.value);
    // console.log(e.target.attributes.alt.value);
    // console.log(e);
  }

  return (
    <div className="filter-container">
      <ul>
        <li
          className={`${filter === "all" ? "active-filter" : ""}`}
          alt="all"
          onClick={selectFilter}
        >
          view all
        </li>
        <li
          className={`${filter === "completed" ? "active-filter" : ""}`}
          alt="completed"
          onClick={selectFilter}
        >
          completed
        </li>
        <li
          className={`${filter === "uncompleted" ? "active-filter" : ""}`}
          alt="uncompleted"
          onClick={selectFilter}
        >
          pending
        </li>
      </ul>
    </div>
  );
};

export default TabFilter;
