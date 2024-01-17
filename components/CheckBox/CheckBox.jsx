"use client";

import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./checkBox.css";

const CheckBox = ({ choice }) => {
  const [checked, setChecked] = useState(false);

  const handleOnClick = () => {
    setChecked(!checked);
  };
  return (
    <div onClick={handleOnClick} className="cursor-pointer">
      <FontAwesomeIcon
        icon={checked ? faCheckSquare : faSquare}
        color={"#013D29"}
      />{" "}
      {choice}
    </div>
  );
};

export default CheckBox;
