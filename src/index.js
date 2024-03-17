import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Nav from './Nav'
import Footer from './Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
        <Footer />
    </BrowserRouter>
)
