import { combineReducers } from 'redux'
import { SpendingsReducer } from './spendings'
import { CategoriesReducer } from './categories'
import { IconsReducer } from './icons'
import { loginReducer } from './login'
export const rootReducer = combineReducers({
  spendings: SpendingsReducer,
  categories: CategoriesReducer,
  icons: IconsReducer,
  login: loginReducer,
})
