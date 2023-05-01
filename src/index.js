import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Staff from './Staff'
import Nav from './Nav'
import Footer from './Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/staff" element={<Staff />} />
        </Routes>
        <Footer />
    </BrowserRouter>
)
