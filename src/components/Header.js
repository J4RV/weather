import React from 'react'
import Inputs from './Inputs'
import {connect} from 'react-redux'

function kelvinToCelsius (kelvinDegrees) {
  return (kelvinDegrees - 273.15).toFixed(1)
}

const Header = ({weather}) => {
  if (weather == null) return null
  if (weather.cod !== '200') return <h2>{weather.message}</h2>
  const city = `${weather.city.name} (${weather.city.country})`
  const currentTemperature = weather.list[0].main.temp
  const currentWeather = weather.list[0].weather[0].main

  return (
    <div className='container header'>
      <span className='header-item'>{city}</span>
      <span className='header-item'>{kelvinToCelsius(currentTemperature)}º</span>
      <span className='header-item'>{currentWeather}</span>
      <Inputs />
    </div>
  )
}

export default connect(
  (state) => state,
  {}
)(Header)
