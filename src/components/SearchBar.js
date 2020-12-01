import React from "react";

class SearchBar extends React.Component {
  state = { searchText: "" };
  onEnterText = (props) => {
    this.setState({ searchText: props.target.value });
  };
  onClickEnter = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.searchText);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onClickEnter} className="ui form">
          <div className="field">
            <label>Videos Search</label>
            <input
              type="text"
              value={this.state.searchText}
              onChange={this.onEnterText}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
