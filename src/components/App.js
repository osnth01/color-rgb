import React from 'react'
import Slider from './Slider'

const App = ({ onChange }) => (
  <div>
    <Slider onChange={onChange} colorId="red" />
    <Slider onChange={onChange} colorId="green" />
    <Slider onChange={onChange} colorId="blue" />
  </div>
)

export default App