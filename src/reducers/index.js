const initialState = {
  red: 0,
  green: 0,
  blue: 0
}

const colors = (state = initialState, action) => {
  switch(action.type) {
    
    case 'CHANGE_COLOR_LEVEL':
      let color = {}
      color[action.color] = parseInt(action.value)

      let newState = Object.assign(state, color)
      let returnState = {
        red: newState.red,
        green: newState.green,
        blue: newState.blue,
      }
      return returnState

    default:
      return state
  }

  return state
}

export default colors