import React from 'react'
import { render } from '@testing-library/react'
import ReactDOM from 'react-dom'
import App from './app'

describe('Front page tests', () => {
  test('renders Front page', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
