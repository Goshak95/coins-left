import * as t from './types'
import { API_ROOT } from '../../constants/Defaults'

export function getSpendings() {
  return dispatch => {
    dispatch({
      type: t.GET_SPENDINGS_REQUEST,
    })

    return fetch(`${API_ROOT}/spendings`)
      .then(response => response.json())
      .then(data => dispatch({ type: t.GET_SPENDINGS_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: t.GET_SPENDINGS_FAILURE, payload: error.message }))
  }
}

export function addSpending(spendingData) {
  return dispatch => {
    dispatch({
      type: t.ADD_SPENDING_REQUEST,
    })
    return fetch(`${API_ROOT}/spendings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(spendingData),
    })
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: t.ADD_SPENDING_SUCCESS,
          payload: data,
        })
      )
      .catch(error => dispatch({ type: t.ADD_SPENDING_FAILURE, payload: error.message }))
  }
}

export function deleteSpending(id) {
  return dispatch => {
    dispatch({
      type: t.DELETE_SPENDING_REQUEST,
    })
    return fetch(`${API_ROOT}/spendings/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: t.DELETE_SPENDING_SUCCESS,
          payload: data,
        })
      )
      .catch(error => dispatch({ type: t.DELETE_SPENDING_FAILURE, payload: error.message }))
  }
}

export function editSpending(data) {
  return dispatch => {
    dispatch({
      type: t.EDIT_SPENDING_REQUEST,
    })

    return fetch(`${API_ROOT}/spendings/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: t.EDIT_SPENDING_SUCCESS,
          payload: data,
        })
      )
      .catch(error => {
        dispatch({
          type: t.EDIT_SPENDING_FAILURE,
          payload: error.message,
        })
      })
  }
}
