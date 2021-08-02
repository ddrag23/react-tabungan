import { createContext } from 'react'

export const initialState = {
  isAuth: localStorage.getItem('isAuthenticated'),
  token: localStorage.getItem('token'),
  payload: JSON.parse(localStorage.getItem('payload')),
}
export const AuthMiddleware = createContext()
export const reducer = (state, dispatch) => {
  switch (dispatch.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuth: localStorage.setItem(
          'isAuthenticated',
          dispatch.payload.isAuth,
        ),
        token: localStorage.setItem('token', dispatch.payload.token),
        payload: localStorage.setItem(
          'payload',
          JSON.stringify(dispatch.payload.user),
        ),
      }
    case 'LOGOUT':
      localStorage.clear()
      return {
        ...state,
        isAuth: '',
        token: '',
        payload: '',
      }
    default:
      break
  }
}
