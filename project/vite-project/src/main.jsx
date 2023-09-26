import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CounterTen from './component/Counter.jsx'
import MagicMessage from './component/MagicMessage'
import Parent from './component/Parent'
import ParentDay15 from './component/Day15/Parent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ParentDay15 />
  </>,
)
