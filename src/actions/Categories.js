export const GET_CATEGORIES_REQUEST = "GET_CATEGORIES_REQUEST"
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS"
export const GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE"

export const ADD_CATEGORY_REQUEST = "ADD_CATEGORY_REQUEST"
export const ADD_CATEGORY_SUCCESS = "ADD_CATEGORY_SUCCESS"
export const ADD_CATEGORY_FAILURE = "ADD_CATEGORY_FAILURE"

export const DELETE_CATEGORY_REQUEST = "DELETE_CATEGORY_REQUEST"
export const DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS"
export const DELETE_CATEGORY_FAILURE = "DELETE_CATEGORY_SUCCESS"

export function getCategories() {
    return dispatch => {
        dispatch({
            type: GET_CATEGORIES_REQUEST,
        })

        fetch('https://5e3ed04a64c3f60014550d95.mockapi.io/api/v1/coinsleft/categories')
            .then(response => response.json())
            .then(data => dispatch({ type: GET_CATEGORIES_SUCCESS, payload: data }))
            .catch(error => dispatch({ type: GET_CATEGORIES_FAILURE, payload: error.message }))
    }
}

export function addCategory(categoryData) {
    return dispatch => {
      dispatch({
        type: ADD_CATEGORY_REQUEST,
      })
      console.log(JSON.stringify(categoryData))
      fetch('https://5e3ed04a64c3f60014550d95.mockapi.io/api/v1/coinsleft/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(categoryData),
      })
        .then(response => response.json())
        .then(data =>
          dispatch({
            type: ADD_CATEGORY_SUCCESS,
            payload: data,
          })
        )
        .catch(error => dispatch({ type: ADD_CATEGORY_FAILURE, payload: error.message }))
    }
  }
  
  export function deleteCategory(id) {
    return dispatch => {
      dispatch({
        type: DELETE_CATEGORY_REQUEST,
      })
      fetch(`https://5e3ed04a64c3f60014550d95.mockapi.io/api/v1/coinsleft/categories/${id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(data =>
          dispatch({
            type: DELETE_CATEGORY_SUCCESS,
            payload: data,
          })
        )
        .catch(error => dispatch({ type: DELETE_CATEGORY_FAILURE, payload: error.message }))
    }
  }



