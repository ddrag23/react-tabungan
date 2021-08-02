// import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { routes } from './utils'
import NotFound from './modules/errors/NotFound'
import { PrivateRoute } from './components/Router'
import { useReducer } from 'react'
import { AuthMiddleware, reducer, initialState } from './middleware'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const privateRoute = routes
    .filter((item) => item.isAuth)
    .map(({ path, component }, key) => {
      return (
        <PrivateRoute
          key={key}
          exact={path === '/' ? true : false}
          path={path}
          component={component}
        />
      )
    })
  const publicRoute = routes
    .filter((item) => !item.isAuth)
    .map(({ path, component }, key) => {
      return (
        <Route
          key={key}
          exact={path === '/' ? true : false}
          path={path}
          component={component}
        />
      )
    })
  return (
    <Router>
      <AuthMiddleware.Provider value={{ state, dispatch }}>
        {state.isAuth === 'true' ? (
          <Redirect to={{ pathname: '/dashboard' }} />
        ) : (
          <Redirect to="/" />
        )}
        <Switch>
          {publicRoute}
          {privateRoute}
          <Route component={NotFound} />
        </Switch>
      </AuthMiddleware.Provider>
    </Router>
  )
}

export default App
