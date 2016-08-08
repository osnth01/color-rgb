import React, { PropTypes } from 'react'
import Slider from './Slider'
import ColorBox from './ColorBox'

const App = ({ colors, changeColorLevel }) => {
  return (
    <div>
      <Slider
        color={'red'}
        onChange={changeColorLevel}
        value={colors.red} />
      <Slider
        color={'green'}
        onChange={changeColorLevel}
        value={colors.green} />
      <Slider
        color={'blue'}
        onChange={changeColorLevel}
        value={colors.blue} />

      <ColorBox colors={colors} />
    </div>
  )
}

App.propTypes = {
  changeColorLevel: PropTypes.func.isRequired,
  colors: PropTypes.object.isRequired
}

export default App