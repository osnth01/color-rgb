import expect from 'expect'
import colors from '../../src/reducers'

describe('colors reducer', () => {
  it('should have an initial state', () => {
    expect(colors(undefined, {}))
      .toEqual({
        red: 100,
        green: 100,
        blue: 100
      })
  })

  it('should change a color level', () => {
    const initialState = {
      red: 100,
      green: 100,
      blue: 100
    }

    const newColorState = colors(initialState, {
      type: 'CHANGE_COLOR_LEVEL',
      colorChange: {
        colorLevel: 255,
        color: 'red'
      }
    })

    expect(newColorState).toEqual({
      red: 255,
      green: 100,
      blue: 100
    })
  })
  
})