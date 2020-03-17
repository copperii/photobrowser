import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import photoReducer from './reducers/photoReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  photos: photoReducer,
  filter: filterReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
