import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
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