import React from 'react'
import {connect} from 'react-redux'
import Input from 'antd/lib/input'
import searchCity from '../actions/searchCity'

const PLACEHOLDER = "Try 'Sevilla' or 'Crater'"

const Inputs = ({city, searchCity}) => (
  <div className='search-input'>
    <Input.Search
      size='large'
      defaultValue={city}
      placeholder={PLACEHOLDER}
      enterButton
      onSearch={value => searchCity(value)}
      maxLength='64'
    />
  </div>
)

export default connect(
  (state) => ({city: state.city}),
  {searchCity}
)(Inputs)
