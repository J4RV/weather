import React from 'react'
import {connect} from 'react-redux'
import TimeWeather from './TimeWeather'

const Weather = ({weather}) => {
  if (weather == null) return null
  if (weather.cod !== '200') return <h2>{weather.message}</h2>
  const weatherList = weather.list
  return (<React.Fragment>
    <div className='weather-list'>
      {
        weatherList.map(weather =>
          <TimeWeather
            key={weather.dt_txt}
            {...weather.main}
            weather={weather.weather[0].main}
            date={weather.dt_txt}
          />)
      }
    </div>
  </React.Fragment>)
}

export default connect(
  (state) => ({weather: state.weather}),
  {}
)(Weather)
