import React from 'react'

const Layout = () => {
  return (
    <>
        <Routes>
        <Route path='/Login' element={<Login/>} />
        </Routes>
    </>
  )
}

export default Layout