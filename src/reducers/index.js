import { combineReducers } from 'redux'
import { SpendingsReducer } from './spendings'
export const rootReducer = combineReducers({
  spendings: SpendingsReducer,
})
