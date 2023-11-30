import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login/Login'
import ProtecteRouter from './components/ProtecteRouter'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login/>} />
        <Route path='/' element={<ProtecteRouter>
          <Layout/>
        </ProtecteRouter>} />
      </Routes>
    </BrowserRouter>
  )
        }
 

export default App