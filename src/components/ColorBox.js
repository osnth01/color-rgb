import React, { PropTypes } from 'react'

const ColorBox = ({ red, green, blue }) => {

  let colors = [red, green, blue]

  let hexColors = colors.map((color) => {
    let hexColor = color.toString(16)
    
    if (hexColor.length === 1)
      hexColor = "0" + hexColor

    return hexColor
  })

  const hex = "#" + hexColors.join("")

  return (
    <div>{hex}</div>
  )
}

ColorBox.propTypes = {
  red: PropTypes.number.isRequired,
  green: PropTypes.number.isRequired,
  blue: PropTypes.number.isRequired
}


export default ColorBox