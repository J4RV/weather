import React from 'react'
import {connect} from 'react-redux'
import TimeWeather from './TimeWeather'
import DayWeather from './DayWeather'

const weatherListToDays = (weatherList) => {
  return weatherList.reduce((wDays, weatherData) => {
    const day = Date.parse(weatherData.dt_txt).toString('yyyy/M/d')
    if (wDays[day]) {
      wDays[day].push(weatherData)
    } else {
      wDays[day] = [weatherData]
    }
    return wDays
  }, {})
}

const renderDetailed = (weather) => {
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

const renderDaysOnly = (weather) => {
  const weatherList = weather.list
  const weatherDays = weatherListToDays(weatherList)
  return (<React.Fragment>
    <div className='weather-list'>
      {
        Object.keys(weatherDays).map(key =>
          <DayWeather
            key={key}
            weatherDays={weatherDays[key]}
          />)
      }
    </div>
  </React.Fragment>)
}

const Weather = ({weather}) => {
  if (weather == null) return null
  if (weather.cod !== '200') return null
  return renderDaysOnly(weather)
}

export default connect(
  (state) => ({weather: state.weather}),
  {}
)(Weather)
