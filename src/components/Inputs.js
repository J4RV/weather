import React from 'react'
import {connect} from 'react-redux'
import Input from 'antd/lib/input'
import searchCity from '../actions/searchCity'

const PLACEHOLDER = "Try 'Sevilla' or 'Crater'"

const Inputs = ({searchCity}) => (
  <div className='search-input'>
    <Input.Search
      size='large'
      placeholder={PLACEHOLDER}
      enterButton
      onSearch={value => searchCity(value)}
      maxLength="64"
    />
  </div>
)

export default connect(
  (state) => state,
  {searchCity}
)(Inputs)
