import expect from 'expect'
import { changeColorLevel } from '../../src/actions'

describe('changeColorLevel', () => {
  it('should create a LEVEL_CHANGE action', () => {
    const colorLevel = 100

    expect(
      changeColorLevel(colorLevel)
    )
    .toEqual(
      {
        type: 'CHANGE_COLOR_LEVEL',
        colorLevel
      }
    )
  })
})