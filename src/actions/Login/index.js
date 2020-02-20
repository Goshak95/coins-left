import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './types'

export function handleLogin(credentials) {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
    })

    fakeLoginRequest(credentials)
      .then(data => {
        if (data.status === 'ok') {
          dispatch({ type: LOGIN_SUCCESS, payload: data })
        } else if (data.status === 'err') {
          dispatch({ type: LOGIN_FAILURE, payload: data.message })
        }
      })
      .catch(error => dispatch({ type: LOGIN_FAILURE, payload: error.message }))
  }
}

export function handleLogout() {
  return {
    type: LOGOUT,
  }
}

function fakeLoginRequest(credentials) {
  //fake wrong credens error
  if (!credentials) {
    return Promise.reject({ error: 'Some error' })
  }

  return Promise.resolve({
    status: 'ok',
    message: '',
    data: {
      id: 1,
      name: 'Georgiy',
    },
  })
}
