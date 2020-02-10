import { GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE, ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, ADD_CATEGORY_FAILURE, DELETE_CATEGORY_REQUEST, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAILURE } from "../actions/Categories"

const initialState = {
  error: null,
  categoriesData: []
}

export function CategoriesReducer(state = initialState, action) {
  switch(action.type) {
    case GET_CATEGORIES_REQUEST:
      return state
    case GET_CATEGORIES_SUCCESS:
      return {...state, categoriesData: action.payload}
    case GET_CATEGORIES_FAILURE:
      return {...state, error: action.payload}
    
    case ADD_CATEGORY_REQUEST:
      return state
    case ADD_CATEGORY_SUCCESS:
      const newCategoriesData = state.categoriesData.concat()
      newCategoriesData.push(action.payload)
      return {...state, categoriesData: newCategoriesData}
    case ADD_CATEGORY_FAILURE:
      return {...state, error: action.payload}

    case DELETE_CATEGORY_REQUEST:
      return state
    case DELETE_CATEGORY_SUCCESS:
      const filteredCategories = state.categoriesData.filter(item => action.payload.id !== item.id)
      return { ...state, spendingsList: filteredCategories}
    case DELETE_CATEGORY_FAILURE:
      return {...state, error: action.payload}
      
    default:
      return state
  }
}