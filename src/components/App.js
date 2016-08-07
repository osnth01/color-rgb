import React from 'react'
import Slider from './Slider'

const App = ({ onChange }) => (
  <div>
    <Slider onChange={onChange} />
    <Slider onChange={onChange} />
    <Slider onChange={onChange} />
  </div>
)

export default App