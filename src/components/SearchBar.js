import React, { useState } from "react";

const SearchBar = ({onFormSubmit}) => {
  const [searchText, setSearchText] = useState("");

  const onClickEnter = (event) => {
    event.preventDefault();
    onFormSubmit(searchText);
  };
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onClickEnter} className="ui form">
        <div className="field">
          <label>Videos Search</label>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
