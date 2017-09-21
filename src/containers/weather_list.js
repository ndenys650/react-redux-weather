import React, { Component } from 'react';
import { connect } from 'react-redux';


// creating table that will hold weather data via bootstrap classes
class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		return (
			<tr key={name}>
				<td>{name}</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather }; // { weather } === { weather: weather }
}

// connect the weather data to the weather list here
export default connect(mapStateToProps)(WeatherList);