import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import { AuthMiddleware } from '../../middleware'

export function PrivateRoute({ component: Component, ...params }) {
  const { state } = useContext(AuthMiddleware)
  return (
    <Route
      {...params}
      render={(props) =>
        state.isAuth === 'true' ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  )
}
