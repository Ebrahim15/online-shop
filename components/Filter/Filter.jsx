"use client";

import React, { useState } from "react";
import "./filter.css";
import CheckBox from "../CheckBox/CheckBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Filter = ({ filter }) => {
  const [toggleFilterMenu, setToggleFilterMenu] = useState(false);
  document.addEventListener("click", (e) => {
    if(e.target !== document.getElementById(`${filter.name}`) && !document.getElementById(`${filter.name}id`).contains(e.target)) {
        setToggleFilterMenu(false)
    }
  });
  return (
    <div className="filter_button">
      <div id={filter.name} onClick={() => setToggleFilterMenu(!toggleFilterMenu)} className="flex items-center gap-2 px-[2rem] py-[0.5rem]">
        <p className="pointer-events-none">{filter.name}</p>
        <FontAwesomeIcon className="pointer-events-none" icon={filter.icon} size="xs" />
      </div>
      <div id={`${filter.name}id`} className={`absolute top-12 p-2 w-full drop-shadow-xl bg-white rounded ${toggleFilterMenu ? "" : "hidden"}`}>
        {filter.choices.map((choice) => {
          return <CheckBox key={choice} choice={choice} />;
        })}
      </div>
    </div>
  );
};

export default Filter;
