import React, { PropTypes } from 'react'

const numToHex = (num) => {
  let hex = num.toString(16)
  if (hex.length == 1)
    hex = "0" + hex
  return hex
}

const ColorBox = ({ colors }) => {
  let hex = '#' + numToHex(colors.red) + numToHex(colors.green) + numToHex(colors.blue)

  return (
    <div>{hex}</div>
  )
}

ColorBox.propTypes = {
  colors: PropTypes.object.isRequired
}


export default ColorBox