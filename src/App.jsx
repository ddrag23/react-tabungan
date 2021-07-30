// import logo from './logo.svg'
import './App.css'
import Layout from './components/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { routes } from './utils'
function App() {
  const routeComponents = routes.map(({ path, component, layout }, key) => {
    if (layout) {
      return (
        <Layout key={key}>
          <Route exact path={path} component={component} />
        </Layout>
      )
    } else {
      return <Route key={key} exact path={path} component={component} />
    }
  })
  return (
    <Router>
      <Switch>{routeComponents}</Switch>
    </Router>
  )
}

export default App
