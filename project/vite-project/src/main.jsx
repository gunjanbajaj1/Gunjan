import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CounterTen from './component/Counter.jsx'
import MagicMessage from './component/MagicMessage'
import Parent from './component/Parent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>,
)
