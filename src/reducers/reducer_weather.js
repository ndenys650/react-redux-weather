import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	// setup switch statement to handle the fetchweather action 'type'
	switch (action.type) {
	case FETCH_WEATHER:
		return [ action.payload.data, ...state ]; // [city, city, city]
	}

	return state;
}