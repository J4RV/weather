import React from 'react'
import Inputs from './Inputs'
import Flag from 'react-world-flags'
import {connect} from 'react-redux'

function kelvinToCelsius (kelvinDegrees) {
  return (kelvinDegrees - 273.15).toFixed(1)
}

const EmptyHeader = ({error}) => (
  <div className='container header'>
    {error ? <span className='header-item'>{error}</span> : null}
    <Inputs />
  </div>
)

const Header = ({weather}) => {
  if (weather == null) return <EmptyHeader />
  if (weather.cod !== '200') return <EmptyHeader error={weather.message} />
  const city = `${weather.city.name} (${weather.city.country})`
  const currentTemperatureInKelvin = weather.list[0].main.temp
  const currentWeather = weather.list[0].weather[0].main

  return (
    <div className='container header'>
      <Flag code={weather.city.country} height="24" />
      <span className='header-item'>{city}</span>
      <span className='header-item'>
        {kelvinToCelsius(currentTemperatureInKelvin)}ºC
      </span>
      <span className='header-item'>{currentWeather}</span>
      <Inputs />
    </div>
  )
}

export default connect(
  (state) => state,
  {}
)(Header)
