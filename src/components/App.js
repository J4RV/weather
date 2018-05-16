import React from 'react'
import {connect} from 'react-redux'
import Weather from './Weather'
import Header from './Header'
import Footer from './Footer'
import searchCity from '../actions/searchCity'
import weatherFromGeolocalization from '../actions/weatherFromGeolocalization'
import '../css/App.css'

// React.Component instead of a function because
// it has to dispatch the searchCity action on mount
class App extends React.Component {
  componentDidMount () {
    const {city, searchCity, weatherFromGeolocalization} = this.props
    const onNoGeo = () => searchCity(city)
    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
        timeout: 3000
      }
      navigator.geolocation.getCurrentPosition(
        weatherFromGeolocalization, onNoGeo, options)
    } else {
      onNoGeo()
    }
  }

  render () {
    return (
      <React.Fragment>
        <Header />
        <Weather />
        <Footer />
      </React.Fragment>
    )
  }
}

export default connect(
  (state) => state,
  {weatherFromGeolocalization, searchCity}
)(App)
