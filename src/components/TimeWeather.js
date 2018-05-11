import React from 'react'

function kelvinToCelsius (kelvinDegrees) {
  return (kelvinDegrees - 273.15).toFixed(1)
}

export default ({date, temp, weather}) => {
  const datejs = Date.parse(date)
  const day = datejs.toString('dddd')
  const fromHours = parseInt(datejs.toString('HH'), 10)
  const toHours = fromHours + 3
  return (
    <div className={'weather-card weather-' + weather.toLowerCase()}>
      <div className='weather-card-header'>{day} {fromHours}h - {toHours}h</div>
      <div className='weather-card-weather'>{weather}</div>
      <div className='weather-card-temperature'>{kelvinToCelsius(temp)}º</div>
    </div>
  )
}
