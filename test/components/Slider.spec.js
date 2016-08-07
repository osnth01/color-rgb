import React from 'react'
import expect from 'expect'
import Slider from '../../src/components/Slider'
import { shallow } from 'enzyme'

function setup() {
  const actions = {
    onChange: expect.createSpy()
  }

  const component = shallow(
    <Slider onChange={actions.onChange} />
  )

  return {
    actions,
    component,
    input: component.find('input')
  }
}

describe('Slider component', () => {
  it('should display a range input', () => {
    const { input } = setup()

    expect(input.type()).toEqual('input')
    expect(input.prop('type')).toEqual('range')
  })

  it('should call onChange', () => {
    const { input, actions } = setup()

    input.simulate('change')
    expect(actions.onChange).toHaveBeenCalled()
  })
})