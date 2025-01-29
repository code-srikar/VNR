import React from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import Room from './components/Room'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/Signup'
import Login from './pages/Login'
import MainRoom from './components/MainRoom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/room' element={<Room />} />
          <Route path='/mroom' element={<MainRoom />} />
        </Routes>
      </BrowserRouter>
      {/* <Room /> */}
    </>
  )
}

export default App