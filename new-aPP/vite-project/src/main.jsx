import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
//import ImageEditor from './component/Imageeditor.jsx'
import CounterWithUseMemo from './component/useMemo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <div style={{display:"none"}}>
  <ImageEditor />
  </div>
  <CounterWithUseMemo />

   
  </>,
)
