import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import {ThemeProvider} from 'react-bootstrap'

ReactDOM.createRoot(document.getElementById('root')).render(
<ThemeProvider dir='rtl'>

  <App />
</ThemeProvider>

)
