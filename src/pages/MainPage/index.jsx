import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Home from '../Home'
import NotFound from '../NotFound'

function MainPage() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Navigate to={"/home"} replace />} />
        <Route path='/register' element={<Navigate to={"/home"} replace />} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
  )
}

export default MainPage