import React from 'react'

function kelvinToCelsius (kelvinDegrees) {
  return (kelvinDegrees - 273.15).toFixed(1)
}

const WEATHERS = ['Clear', 'Clouds', 'Rain', 'Snow']
const WEATHER_EMOJIS = {
  'Clear': '☀️',
  'Clouds': '☁️',
  'Rain': '☔',
  'Snow': '❄️',
}

const avg = (nums) => ( nums.reduce((a, b) => a + b) / nums.length )
const max = (nums) => ( nums.reduce((a, b) => a > b ? a : b ))
const min = (nums) => ( nums.reduce((a, b) => a < b ? a : b ))

export default ({weatherDays}) => {
  const weather = WEATHERS[
    max(weatherDays.map(wday => WEATHERS.indexOf(wday.weather[0].main)))
  ]
  const lowercaseWeather = weather.toLowerCase()
  const datejs = Date.parse(weatherDays[0].dt_txt)
  const day = datejs.toString('dddd')
  const avgTemperature = avg(weatherDays.map(wday => wday.main.temp))
  const maxTemperature = max(weatherDays.map(wday => wday.main.temp_max))
  const minTemperature = min(weatherDays.map(wday => wday.main.temp_min))
  return (
    <div className={'weather-day weather-' + lowercaseWeather}>
      <div className='weather-day-icon'>{WEATHER_EMOJIS[weather]}</div>
      <div className='weather-day-header'>{day}: {weather}</div>
      <div>
        <div className='weather-day-temperature'>~{kelvinToCelsius(avgTemperature)}º</div>
        <div className='weather-day-temperature'>↑{kelvinToCelsius(maxTemperature)}º</div>
        <div className='weather-day-temperature'>↓{kelvinToCelsius(minTemperature)}º</div>
      </div>
    </div>
  )
}
