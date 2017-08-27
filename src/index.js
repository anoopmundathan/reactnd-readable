import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

// REDUX
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import postReducer from './reducers'
import './index.css'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker'

const middleware = applyMiddleware(thunk, createLogger())
const store = createStore(postReducer, middleware)

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider> , document.getElementById('root'))
registerServiceWorker()
