import React from 'react'
// import { render } from '@testing-library/react'
import ReactDOM from 'react-dom'
import AllPhotos from './allPhotos'
import { Provider } from 'react-redux'
import store from '../store'

describe('AllPhotos tests', () => {
  test('renders AllPhotos component', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <AllPhotos />
      </Provider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
