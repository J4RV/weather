import React from 'react'

function kelvinToCelsius (kelvinDegrees) {
  return (kelvinDegrees - 273.15).toFixed(1)
}

export default ({date, temp, weather}) => {
  const datejs = Date.parse(date)
  const day = datejs.toString('dddd')
  const fromHours = parseInt(datejs.toString('HH'))
  const toHours = fromHours + 3
  return (
    <div className={'weather-day weather-' + weather.toLowerCase()}>
      <div className='weather-day-header'>{day} {fromHours}h - {toHours}h</div>
      <div className='weather-day-weather'>{weather}</div>
      <div className='weather-day-temperature'>{kelvinToCelsius(temp)}º</div>
    </div>
  )
}