import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LaunchMissile from './component/Launch.jsx'
import ProductList from './component/ProductList.jsx'
import ProductListWithFilters from './component/filteredProject.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{display:"none"}}>
    <LaunchMissile />
    <ProductList />
    </div>
    
    <ProductListWithFilters />
  </React.StrictMode>,
)
