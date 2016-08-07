import expect from 'expect'
import { changeColorLevel } from '../../src/actions'

describe('changeColorLevel', () => {
  it('should create a LEVEL_CHANGE action', () => {
    const colorChange = {
      colorLevel: 100,
      color: 'r'
    }

    expect(
      changeColorLevel(colorChange)
    )
    .toEqual(
      {
        type: 'CHANGE_COLOR_LEVEL',
        colorChange
      }
    )
  })
})