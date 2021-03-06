import React from 'react'
// import { render } from '@testing-library/react'
import ReactDOM from 'react-dom'
import App from './app'
import { Provider } from 'react-redux'
import store from '../store'

describe('Front page tests', () => {
  test('renders Front page', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
