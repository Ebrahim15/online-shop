"use client";

import React, { useState } from "react";
import "./sortBy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const SortBy = ({ sortByOptions }) => {
  const [toggleSortByMenu, setToggleSortByMenu] = useState(false);
  const [sortBySelected, setSortBySelected] = useState('');

  document.addEventListener("click", (e) => {
    if (
      e.target !== document.getElementById('sortByButton') 
    ) {
      setToggleSortByMenu(false);
    }
  });

  return (
    <div className="relative w-[16rem] flex justify-end">
      <div
        id="sortByButton"
        className="sort_by_button"
        onClick={() => setToggleSortByMenu(!toggleSortByMenu)}
      >
        <p className="pointer-events-none">Sort by{sortBySelected !== '' ? `: ${sortBySelected}` : ""}</p>
        <FontAwesomeIcon
          icon={faChevronDown}
          size="xs"
          className="pointer-events-none"
        />
      </div>
      <div
        className={`absolute top-12 drop-shadow-xl bg-white z-30 font-medium rounded ${
          toggleSortByMenu ? "" : "hidden"
        }`}
      >
        {sortByOptions.map((option) => (
          <div
            key={option.name}
            className={`px-4 py-1 flex flex-col ${
              sortBySelected === option.name ? "bg-hover-bg" : ""
            }`}
          >
            <p
              className="cursor-pointer"
              onClick={() => setSortBySelected(option.name)}
            >
              {option.name}
            </p>
            {/* <span className="border border-solid my-2"></span> */}
          </div>
        ))}
        <div className={`px-4 py-1 flex flex-col`}>
          <p className="cursor-pointer" onClick={() => setSortBySelected("")}>
            Reset
          </p>
        </div>
      </div>
    </div>
  );
};

export default SortBy;
