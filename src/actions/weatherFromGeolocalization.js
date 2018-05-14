import APPID from './appid'
import {SET_CITY, SET_WEATHER} from './actionKeys'

const getGeoApiUrl = ({lat, lon}) => `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APPID}`

export default (position) => (dispatch) => {
  const url = getGeoApiUrl({
    lat: position.coords.latitude,
    lon: position.coords.longitude
  })
  window.fetch(url)
    .then(results => {
      return results.json()
    }).then(data => {
      dispatch({type: SET_CITY, city: data.city.name})
      dispatch({type: SET_WEATHER, weather: data})
    })
}
