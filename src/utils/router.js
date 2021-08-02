import Dashboard from '../modules/dashboard'
import Login from '../modules/login/login'
import Withdraw from '../modules/withdraw'

const routes = [
  {
    path: '/',
    component: Login,
    isAuth: false,
  },
  {
    path: '/about',
    component: Dashboard,
    isAuth: true,
  },
  {
    path: '/withdraw',
    component: Withdraw,
    isAuth: true,
  },

  {
    path: '/dashboard',
    component: Dashboard,
    isAuth: true,
  },
]
export default routes
