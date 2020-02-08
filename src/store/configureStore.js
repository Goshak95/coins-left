import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from '../reducers'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(ReduxThunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
