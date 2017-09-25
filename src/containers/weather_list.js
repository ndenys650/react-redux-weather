import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';


// creating table that will hold weather data via bootstrap classes
class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);

		return (
			// bringing in chart component with data we want to use and color, height and iwdth were preset in chart.js
			<tr key={name}>
				<td>{name}</td>
				<td><Chart data={temps} color="orange" units="K" /* refactored out chart component to be its own functional component */ /></td>
				<td><Chart data={pressures} color="green" units="hPa" /* refactored out chart component to be its own functional component */ /></td>
				<td><Chart data={humidities} color="black" units="%" /* refactored out chart component to be its own functional component */ /></td>
			</tr>
		);
	}

	render() {
		return (
			// outline of chart and titles
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
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