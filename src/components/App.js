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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(weatherFromGeolocalization)
    } else {
      searchCity(city)
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
