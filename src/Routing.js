import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Login from './pages/Login'
import Register from './pages/Register'

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/" element={<Layout />}></Route>
        </Routes>
    </Router>
  )
}

export default Routing