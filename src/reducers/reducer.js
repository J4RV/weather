import {SET_CITY, SET_WEATHER} from '../actions/actionKeys'

const initState = {
  city: 'Seville',
  weather: undefined
}

export default (state = initState, action) => {
  switch (action.type) {
    case SET_CITY:
      return {...state, city: action.city}
    case SET_WEATHER:
      const weather = action.weather
      console.log('Setting weather', weather)
      const currentWeather =
        weather.cod === '200'
          ? weather.list[0].weather[0].main.toLowerCase()
          : undefined
      return {...state, weather, currentWeather}
    default:
      return state
  }
}
