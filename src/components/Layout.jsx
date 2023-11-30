import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPages from '../pages/MainPages'

const Layout = () => {
  return (
    <>
        <Routes>
        <Route path='/' element={<MainPages/>} />
        </Routes>
    </>
  )
}

export default Layout
