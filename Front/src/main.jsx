import React from 'react'
import ReactDOM from 'react-dom/client'
import AppTest from './AppTest.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppTest />
    </BrowserRouter>
  </React.StrictMode>,
)
