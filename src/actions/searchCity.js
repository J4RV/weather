import APPID from './appid'
import {SET_CITY, SET_WEATHER} from './actionKeys'

const getCityApiUrl = (city) => `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURI(city)}&appid=${APPID}`

const invalidCity = (city) => (city == null || city.trim() === '')

export default (city) => (dispatch) => {
  if (invalidCity(city)) return
  dispatch({type: SET_CITY, city: city})
  const url = getCityApiUrl(city)
  window.fetch(url)
    .then(results => {
      return results.json()
    }).then(data => {
      dispatch({type: SET_WEATHER, weather: data})
    })
}
