import React from 'react'
import Nav from './components/Nav'
import Login from './pages/Login'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Layout' element={<Layout/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App