import React, { PropTypes } from 'react'
import Slider from './Slider'
import ColorBox from './ColorBox'

const App = ({ colors, changeColorLevel }) => {
  return (
  <div>
    <Slider onChange={changeColorLevel} colorId="red" />
    <Slider onChange={changeColorLevel} colorId="green" />
    <Slider onChange={changeColorLevel} colorId="blue" />

    <ColorBox red={colors.red} green={colors.green} blue={colors.blue} />
  </div>
)
}

App.propTypes = {
  changeColorLevel: PropTypes.func.isRequired,
  colors: PropTypes.object.isRequired
}

export default App