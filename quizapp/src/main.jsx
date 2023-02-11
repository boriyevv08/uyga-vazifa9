import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import './i18next/index.js'
import Header from './components/Header/Heder'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <Header/>
      <App />
    </Router>
)
