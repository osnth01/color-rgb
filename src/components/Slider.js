import React, { Component, PropTypes } from 'react'

const Slider = ({ onChange }) => (
  <input type="range" onChange={onChange}/>
)

Slider.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Slider
