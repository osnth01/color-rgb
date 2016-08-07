import React from 'react'
import Slider from './Slider'
import ColorBox from './ColorBox'

const App = ({ onChange }) => (
  <div>
    <Slider onChange={onChange} colorId="red" />
    <Slider onChange={onChange} colorId="green" />
    <Slider onChange={onChange} colorId="blue" />

    <ColorBox red={100} green={100} blue={100} />
  </div>
)

export default App