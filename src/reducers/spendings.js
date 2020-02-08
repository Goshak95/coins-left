import {
  GET_SPENDINGS_SUCCESS,
  GET_SPENDINGS_REQUEST,
  GET_SPENDINGS_FAILURE,
  ADD_SPENDING_REQUEST,
  ADD_SPENDING_SUCCESS,
  ADD_SPENDING_FAILURE,
} from '../actions/Spendings'

const initialState = {
  error: null,
  isLoading: false,
  spendingsList: [],
}

export function SpendingsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SPENDINGS_REQUEST:
      return { ...state, isLoading: true }
    case GET_SPENDINGS_SUCCESS:
      return { ...state, spendingsList: action.payload, isLoading: false }
    case GET_SPENDINGS_FAILURE:
      return { ...state, error: action.payload }

    case ADD_SPENDING_REQUEST:
      return { ...state, isLoading: true }
    case ADD_SPENDING_SUCCESS:
      const newSpendings = state.spendingsList.concat()
      newSpendings.push(action.payload)
      return { ...state, spendingsList: newSpendings, isLoading: false }
    case ADD_SPENDING_FAILURE:
      return { ...state, error: action.payload }

    default:
      return state
  }
}
