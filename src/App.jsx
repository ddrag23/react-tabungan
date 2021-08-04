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
      return <PrivateRoute key={key} exact path={path} component={component} />
    })
  const publicRoute = routes
    .filter((item) => !item.isAuth)
    .map(({ path, component }, key) => {
      return <Route key={key} exact path={path} component={component} />
    })
  return (
    <AuthMiddleware.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>
          {/* {state.isAuth === 'true' ? (
            <Redirect to={{ pathname: '/dashboard' }} />
          ) : (
            <Redirect to="/" />
          )} */}
          {publicRoute}
          {privateRoute}
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </AuthMiddleware.Provider>
  )
}

export default App
