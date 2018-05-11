import React from 'react'

function kelvinToCelsius (kelvinDegrees) {
  return (kelvinDegrees - 273.15).toFixed(1)
}

export default ({date, temp, weather}) => {
  const datejs = Date.parse(date)
  const day = datejs.toString('dddd')
  const hours = `${datejs.toString('HH')}`
  return (
    <div className={'weather-day weather-' + weather.toLowerCase()}>
      <div className='weather-day-header'>{day} {hours}h</div>
      <div className='weather-day-weather'>{weather}</div>
      <div className='weather-day-temperature'>{kelvinToCelsius(temp)}º</div>
    </div>
  )
}