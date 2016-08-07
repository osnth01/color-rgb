import React from 'react'
import expect from 'expect'
import ColorBox from '../../src/components/ColorBox'
import { shallow } from 'enzyme'

function setup() {
  const props = {
    red: 100,
    green: 100,
    blue: 100
  }

  const component = shallow(<ColorBox {...props} />)

  return {
    component,
    props
  }
}

describe('ColorBox', () => {
  it('returns the correct hex value', () => {
    const { component } = setup()

    expect(component.text()).toEqual('#646464');
  })
})