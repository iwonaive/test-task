import React from "react";
import "./Search.css";

const Search: React.FC = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Search..." className="search__input" />
    </div>
  );
};

export default Search;
