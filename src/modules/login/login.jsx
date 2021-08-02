import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthMiddleware } from '../../middleware'
import { validate, renderFeedback, onNotif } from '../../utils'

function Login() {
  const history = useHistory()
  const { dispatch } = useContext(AuthMiddleware)
  const [form, setForm] = useState({
    username: '',
    password: '',
    errors: {},
    msg: '',
  })
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()
    let icon
    let title
    try {
      await window.$api.get('http://localhost/tabunganku/sanctum/csrf-cookie')
      const res = await window.$api.post('login', form)
      const data = res.data
      if (data.success) {
        icon = 'success'
        title = 'Berhasil!'
        dispatch({
          type: 'LOGIN',
          payload: {
            isAuth: true,
            user: data.user,
            token: data.token,
          },
        })
        history.push('/withdraw')
      } else {
        icon = 'error'
        title = 'Gagal!'
        setForm({
          ...form,
          errors: data.errors,
          msg: data.message,
        })
      }
      onNotif(title, icon, data.message)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div
        className="wrap row d-flex justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        <div className="col-lg-4 col-md-6">
          <div className="card shadow-sm">
            <form action="" onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <h3 className="text-center">Login</h3>
                  </div>
                  <div className="mb-3 col-12">
                    <label className="form-label" htmlFor="username">
                      Username
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        form.errors !== undefined &&
                        validate(form.errors.username)
                      }`}
                      name="username"
                      id="username"
                      value={form.username}
                      onChange={handleChange}
                    />
                    {form.errors !== undefined &&
                      renderFeedback(form.errors.username)}
                  </div>
                  <div className="mb-3 col-12">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className={`form-control ${
                        form.errors !== undefined &&
                        validate(form.errors.password)
                      }`}
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      id="password"
                    />
                    {form.errors !== undefined &&
                      renderFeedback(form.errors.username)}
                  </div>
                </div>
                <div className="d-grid mt-3">
                  <button className="btn btn-primary btn-block" type="submit">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
