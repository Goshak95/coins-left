export const GET_SPENDINGS_REQUEST = 'GET_SPENDINGS_REQUEST'
export const GET_SPENDINGS_SUCCESS = 'GET_SPENDINGS_SUCCESS'
export const GET_SPENDINGS_FAILURE = 'GET_SPENDINGS_FAILURE'

export const ADD_SPENDING_REQUEST = 'ADD_SPENDING_REQUEST'
export const ADD_SPENDING_SUCCESS = 'ADD_SPENDING_SUCCESS'
export const ADD_SPENDING_FAILURE = 'ADD_SPENDING_FAILURE'

export const DELETE_SPENDING_REQUEST = 'DELETE_SPENDING_REQUEST'
export const DELETE_SPENDING_SUCCESS = 'DELETE_SPENDING_SUCCESS'
export const DELETE_SPENDING_FAILURE = 'DELETE_SPENDING_FAILURE'

export function getSpendings(spendingsList) {
  return dispatch => {
    dispatch({
      type: GET_SPENDINGS_REQUEST,
    })

    fetch('https://5e3ed04a64c3f60014550d95.mockapi.io/api/v1/coinsleft/spendings')
      .then(response => response.json())
      .then(data => dispatch({ type: GET_SPENDINGS_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: GET_SPENDINGS_FAILURE, payload: error.message }))
  }
}

export function addSpending(spendingData) {
  return dispatch => {
    dispatch({
      type: ADD_SPENDING_REQUEST,
    })
    console.log(JSON.stringify(spendingData))
    fetch('https://5e3ed04a64c3f60014550d95.mockapi.io/api/v1/coinsleft/spendings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(spendingData),
    })
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: ADD_SPENDING_SUCCESS,
          payload: data,
        })
      )
      .catch(error => dispatch({ type: ADD_SPENDING_FAILURE, payload: error.message }))
  }
}

export function deleteSpending(id) {
  return dispatch => {
    dispatch({
      type: DELETE_SPENDING_REQUEST
    })
    fetch(`https://5e3ed04a64c3f60014550d95.mockapi.io/api/v1/coinsleft/spendings/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: DELETE_SPENDING_SUCCESS,
          payload: data,
        })
      )
      .catch(error => dispatch({ type: DELETE_SPENDING_FAILURE, payload: error.message }))
  }
}
