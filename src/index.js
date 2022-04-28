import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './animate.min.css'
import App from './App'
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './redux/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers())

const runApp = () => {
  ReactDOM.render(
    // <React.StrictMode> Lo removí por mientras porque me estaba llamando las funciones dos veces :v
    <Provider store={store}>
      <App />
    </Provider>,
    // </React.StrictMode>,
    document.getElementById('root'),
  )
}

if (window.cordova) {
  document.addEventListener('deviceready', runApp, false)
} else {
  runApp()
}
