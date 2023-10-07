import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Routes>
      <Route element={<Home></Home>} path='/home'></Route>
      <Route element={<Login></Login>} path='/login'></Route>
      <Route element={<Register></Register>} path='/register'></Route>
    </Routes>
  )
}

export default App