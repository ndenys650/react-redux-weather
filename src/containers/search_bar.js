import React, { Component } from 'react';

// created the container Searchbar component
export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return (
			// created search bar and button with bootstrap classes
			<form className="input-group">
				<input />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}