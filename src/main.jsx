import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-gradient-to-r from-green-300 to-blue-500">
      <App />
    </div>
  </React.StrictMode>,
)
