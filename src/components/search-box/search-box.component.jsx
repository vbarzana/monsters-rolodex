import React from "react";
import "./search-box.styles.scss";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  ></input>
);
