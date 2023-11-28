import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout/'
import Login from './pages/Login'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/Login' element={<Login/>} />
        <Route path='/' element={<Layout/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App