import React, { Component } from 'react';

// importing searchbar container to main app component to be rendered onto app site
import SearchBar from '../containers/search_bar';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      </div>
    );
  }
}
