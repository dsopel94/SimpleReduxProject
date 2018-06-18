import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return <input onChange={event => console.log(event)} />;
  }
}



export default SearchBar;
