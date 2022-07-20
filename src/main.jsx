import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // The strict mode interferes in the first useEffect in the App.jsx so just to probe we can use <> </> to let works
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
