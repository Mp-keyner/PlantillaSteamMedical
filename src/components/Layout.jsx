import { Route, Routes } from 'react-router-dom'
import MainPages from '../pages/MainPages'
import Citas from '../pages/Citas'

const Layout = () => {
  return (
    <>
        <Routes>
        <Route path='/' element={<Citas/>} />
        </Routes>
    </>
  )
}

export default Layout