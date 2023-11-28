import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}/>
    <Route path='/login' element={<Login/>}/>
    {/* <Route path='' element={}/> */}
   </Routes>
   </BrowserRouter>
  )
}

export default App