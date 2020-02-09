import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from '../reducers'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(ReduxThunk, logger),
    window.REDUX_DEVTOOLS_EXTENSION ? window.REDUX_DEVTOOLS_EXTENSION() : f => f
  )
)
