import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

// created container Searchbar component
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		// bind the context of onInputChange
		// take existing function, bind it to 'this', replace existing function
		// overriding the local method
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	// define input change function
	onInputChange(event) {
		console.log(event.target.value);
		// if you have have a call back to 'this', it needs to be binded as above
		this.setState({ term: event.target.value });
	}

	// function will tell app that weather data needs to be fetched
	onFormSubmit(event) {
		event.preventDefault();

	// on form submit, here, we will fetch the weather data from our action
		this.props.fetchWeather(this.state.term);
		this.setState({ term: ''});
	}

	render() {
		return (
			// created search bar and button with bootstrap classes
			<form onSubmit={this.onFormSubmit} className="input-group">
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

// hookup fetchweather action to searchbar container
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);

}

// exported action of hooking api request to SearchBar through 'connect'
export default connect(null, mapDispatchToProps)(SearchBar);












