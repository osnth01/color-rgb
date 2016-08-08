import React from 'react'
import expect from 'expect'
import App from '../../src/components/App'
import { mount } from 'enzyme'

function setup() {
  const actions = {
    onChange: expect.createSpy()
  }

  const colors = {
    red: 0,
    green: 0,
    blue: 0
  }

  const wrapper = mount(
    <App onChange={actions.onChange} colors={colors}/>
  )

  return {
    wrapper,
    inputs: wrapper.find('input')
  }
}

describe('App component', () => {
  it('should render three Slider components', () => {
    const { inputs } = setup()

    expect(inputs.at(0).type()).toEqual('input')
    expect(inputs.length).toEqual(3)
  })
})