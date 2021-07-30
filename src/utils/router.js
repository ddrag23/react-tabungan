import Dashboard from '../pages/dashboard'
import Login from '../pages/auth/login'

const routes = [
  {
    path: '/',
    component: Login,
    layout: false,
  },
  {
    path: '/about',
    component: Dashboard,
    layout: true,
  },
  {
    path: '/users',
    component: Dashboard,
    layout: true,
  },

  {
    path: '/dashboard',
    component: Dashboard,
    layout: true,
  },
]
export default routes
