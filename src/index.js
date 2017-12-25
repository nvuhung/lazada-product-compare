import registerServiceWorker from './registerServiceWorker'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'
import App from './containers/App'
import ScrollToTop from './components/ScrollToTop'
import './styles.css'

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
