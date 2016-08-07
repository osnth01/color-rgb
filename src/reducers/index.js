const colors = (state, action) => {
  state = state || {red: 100, green: 100, blue: 100}
  switch(action.type) {
    case 'CHANGE_COLOR_LEVEL':
      const color = action.colorChange.color
      const colorLevel = action.colorChange.colorLevel

      state[color] = colorLevel
      return state
  }

  return state
}

export default colors