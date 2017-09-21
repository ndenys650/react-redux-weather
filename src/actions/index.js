// import axios to make ajax request
import axios from 'axios';

const API_KEY = 'a82e8c446ab4b3831681e26a66184193';
// concatenate api url with key
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// FETCHWEATHER is made to be used as a single dynamic term across the app
export const FETCH_WEATHER = 'FETCH_WEATHER';

// set up fetchweather action creator 
export function fetchWeather(city) {
	// 'url' ajax calls for only cities in the US
	const url = `${ROOT_URL}&q=${city},us`;
	// creator sends a request through backend api here, 
	// 'request' is a 'promise' utilized by the middleware
	const request = axios.get(url);

	console.log('Request:', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}