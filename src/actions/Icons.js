export const GET_ICONS_REQUEST = "GET_ICONS_REQUEST"
export const GET_ICONS_SUCCESS = "GET_ICONS_SUCCESS"
export const GET_ICONS_FAILURE = "GET_ICONS_FAILURE"

export function getIcons() {
  return dispatch => {
      dispatch({
          type: GET_ICONS_REQUEST,
      })

      fetch('https://5e3ed04a64c3f60014550d95.mockapi.io/api/v1/coinsleft/icons')
          .then(response => response.json())
          .then(data => dispatch({ type: GET_ICONS_SUCCESS, payload: data }))
          .catch(error => dispatch({ type: GET_ICONS_FAILURE, payload: error.message }))
  }
}