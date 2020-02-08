import { GET_SPENDINGS } from '../actions/Spendings'

const initialState = {
  error: null,
  isLoaded: false,
  spendingsList: [],
}

export function SpendingsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SPENDINGS:
      return { ...state, spendingsList: action.payload, isLoaded: true }
    default:
      return { ...state }
  }
}
