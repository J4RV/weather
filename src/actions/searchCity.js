export const SET_CITY = 'SET_CITY'
export const SET_WEATHER = 'SET_WEATHER'

const APPID = 'b421d97b626c605492d19e0c32f36ed8'
const getCityApiUrl = (city) => (`http://api.openweathermap.org/data/2.5/forecast?q=${encodeURI(city)}&appid=${APPID}`)

export default (city) => (dispatch) => {
  dispatch({type: SET_CITY, city: city})
  const url = getCityApiUrl(city)
  window.fetch(url)
    .then(results => {
      return results.json()
    }).then(data => {
      dispatch({type: SET_WEATHER, weather: data})
    })
}
