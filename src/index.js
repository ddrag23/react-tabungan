import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import api from './api'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

window.$swal = withReactContent(Swal)

window.$api = api
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
