import { combineReducers } from 'redux';
// import weather reducer
import WeatherReducer from './reducer_weather'

const rootReducer = combineReducers({
	// implement weather reducer
  weather: WeatherReducer
});

export default rootReducer;
