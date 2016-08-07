import expect from 'expect'
import colors from '../../src/reducers'

describe('colors reducer', () => {
  it('should have an initial state', () => {
    expect(colors(undefined, {}))
      .toEqual({
        r: 100,
        g: 100,
        b: 100
      })
  })

  it('should change a color level', () => {
    const initialState = {
      r: 100,
      g: 100,
      b: 100
    }

    const newColorState = colors(initialState, {
      type: 'CHANGE_COLOR_LEVEL',
      colorChange: {
        colorLevel: 255,
        color: 'r'
      }
    })

    expect(newColorState).toEqual({
      r: 255,
      g: 100,
      b: 100
    })
  })
  
})