import {
  GET_SPENDINGS_SUCCESS,
  GET_SPENDINGS_REQUEST,
  GET_SPENDINGS_FAILURE,
  ADD_SPENDING_REQUEST,
  ADD_SPENDING_SUCCESS,
  ADD_SPENDING_FAILURE,
  DELETE_SPENDING_REQUEST,
  DELETE_SPENDING_SUCCESS,
  DELETE_SPENDING_FAILURE,
  EDIT_SPENDING_REQUEST,
  EDIT_SPENDING_SUCCESS,
  EDIT_SPENDING_FAILURE,
} from '../actions/Spendings/types'

export const initialState = {
  error: null,
  isLoading: false,
  spendingsList: [],
}

export function SpendingsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SPENDINGS_REQUEST:
      return { ...state, isLoading: true, error: null }
    case GET_SPENDINGS_SUCCESS:
      return { ...state, spendingsList: action.payload, isLoading: false }
    case GET_SPENDINGS_FAILURE:
      return { ...state, error: action.payload, isLoading: false }

    case ADD_SPENDING_REQUEST:
      return { ...state, isLoading: true, error: null }
    case ADD_SPENDING_SUCCESS:
      const newSpendings = state.spendingsList.concat()
      newSpendings.push(action.payload)
      return { ...state, spendingsList: newSpendings, isLoading: false }
    case ADD_SPENDING_FAILURE:
      return { ...state, error: action.payload, isLoading: false }

    case DELETE_SPENDING_REQUEST:
      return { ...state, isLoading: true, error: null }
    case DELETE_SPENDING_SUCCESS:
      const filteredSpendings = state.spendingsList.filter(item => action.payload.id !== item.id)
      return { ...state, spendingsList: filteredSpendings, isLoading: false }
    case DELETE_SPENDING_FAILURE:
      return { ...state, error: action.payload, isLoading: false }

    case EDIT_SPENDING_REQUEST:
      return { ...state, error: null }
    case EDIT_SPENDING_SUCCESS:
      const updatedSpendings = state.spendingsList.map(item => {
        if (item.id === action.payload.id) {
          return action.payload
        } else {
          return item
        }
      })
      return { ...state, spendingsList: updatedSpendings }
    case EDIT_SPENDING_FAILURE:
      return { ...state, error: action.payload }

    default:
      return state
  }
}
