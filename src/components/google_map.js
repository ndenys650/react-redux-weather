import React, { Component } from 'react';

class GoogleMap extends Component {
	// lifecycle methods that gets called automatically after component is rendered to screen
	componentDidMount() {
		// create embedded google map inside document
		new google.maps.Map(this.refs.map, {
			// options object
			zoom: 12, // gives the view of the city
			center: { // location of city
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}
 
	render() {
		// this.refs.map gives back map from above
		return <div ref="map" />;
	}
}

export default GoogleMap;