import React, { PropTypes } from 'react'
import Slider from './Slider'
import ColorBox from './ColorBox'

const App = ({ colors, changeColorLevel }) => {
  return (
    <div>
      { 
        colors.map( (color, i) => {
          return (
              <Slider
                key={i}
                color={color.name}
                value={color.value}
                onChange={changeColorLevel} />
            )
        } )
      }
      <ColorBox colors={colors} />
    </div>
  )
}

App.propTypes = {
  changeColorLevel: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired
}

export default App