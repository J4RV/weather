import React from 'react'
import {connect} from 'react-redux'
import Weather from './Weather'
import Header from './Header'
import searchCity from '../actions/searchCity'
import '../css/App.css'

// React.Component instead of a function because
// it has to dispatch the searchCity action on mount
class App extends React.Component {
  componentDidMount () {
    const {city, searchCity} = this.props
    searchCity(city)
  }

  render () {
    return (
      <React.Fragment>
        <Header />
        <Weather />
      </React.Fragment>
    )
  }
}

export default connect(
  (state) => state,
  {searchCity}
)(App)
