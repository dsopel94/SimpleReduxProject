import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyB4U71o66VfrJ6C4JSePiHl8kR87ecl9TU';

const App = () => {
  return <div>
    <SearchBar />
  </div>;
}


ReactDOM.render(<App />, document.querySelector('.container'))
