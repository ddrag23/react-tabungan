import { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AuthMiddleware } from '../../middleware'
import api from '../../api'
function Navbar() {
  const { dispatch } = useContext(AuthMiddleware)
  const history = useHistory()
  const handleLogout = async () => {
    try {
      await api.get('logout', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      dispatch({ type: 'LOGOUT' })
      history.push('/')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/withdraw"
              >
                Withdraw
              </Link>
              <Link className="nav-link" to="/about">
                Savings
              </Link>
              <button className="btn btn-primary" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
