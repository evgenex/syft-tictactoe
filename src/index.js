import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import { Board } from './components/board/board'
import configureStore from './store'
import { Provider } from 'react-redux'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Board />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
