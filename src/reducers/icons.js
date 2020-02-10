import { GET_ICONS_REQUEST, GET_ICONS_SUCCESS, GET_ICONS_FAILURE } from "../actions/Icons"

const initialState = {
  error: null,
  iconsData: []
}

export function IconsReducer(state = initialState, action) {

  switch(action.type) {

    case GET_ICONS_REQUEST:
      return state
    case GET_ICONS_SUCCESS:
      return {...state, iconsData: action.payload}
    case GET_ICONS_FAILURE:
      return {...state, error: action.payload}

    default:
      return state
  }
}