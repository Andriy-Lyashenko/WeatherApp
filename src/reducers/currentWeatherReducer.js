import {ACTIVE_CITY} from '../actions/index'

const currentWeatherReducer = (state = { activeCity: {} }, action) =>{
    switch (action.type){
        case ACTIVE_CITY:
            return {
                ...state,
                activeCity: action.payload
            }
        default: return state
    }
}

export default currentWeatherReducer