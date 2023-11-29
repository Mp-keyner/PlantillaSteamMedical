import React from 'react'
import Login from './pages/Login'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/' element={<Layout/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App