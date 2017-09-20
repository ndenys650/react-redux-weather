import React, { Component } from 'react';

// created container Searchbar component
export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		// bind the context of onInputChange
		// take existing function, bind it to 'this', replace existing function
		// overriding the local method
		this.onInputChange = this.onInputChange.bind(this);
	}

	// define input change function
	onInputChange(event) {
		console.log(event.target.value);
		this.setState({ term: event.target.value });
	}

	render() {
		return (
			// created search bar and button with bootstrap classes
			<form className="input-group">
				<input 
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}