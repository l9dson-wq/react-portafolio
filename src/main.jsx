import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './partials/Navbar.jsx'
import Footer from './partials/Footer.jsx'
import './main.css'
import 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>,
)
