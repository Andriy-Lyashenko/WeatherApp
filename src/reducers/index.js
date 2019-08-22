import {combineReducers} from 'redux'
import currentWeather from './currentWeatherReducer'

export default combineReducers({
    currentWeather: currentWeather
})