import React from 'react'
import ReactDOM from 'react-dom'
import colors from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const App = () => <div>hi</div>

let store = createStore(colors)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)