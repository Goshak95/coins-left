import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/Login/types'

const initialState = {
  userData: {},
  error: '',
  isLoading: false,
  isLoggedIn: false,
}

export function loginReducer(store = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...store, isLoading: true, error: '' }
    case LOGIN_SUCCESS:
      return { ...store, userData: action.payload, isLoading: false, isLoggedIn: true, error: '' }
    case LOGIN_FAILURE:
      return { ...store, isLoading: false, error: action.payload }
    case LOGOUT:
      return { ...store, isLoggedIn: false }
    default:
      return store
  }
}
