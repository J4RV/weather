import React from 'react'
import {connect} from 'react-redux'
import Input from 'antd/lib/input'
import searchCity from '../actions/searchCity'

const Inputs = ({searchCity}) => (
  <div className='search-input'>
    <Input.Search
      size='large'
      placeholder="Try 'Seville' or 'Crater'"
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
