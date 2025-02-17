import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Login from './pages/Login'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import MyProfile from './pages/MyProfile'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <h1 className='mx-4 sm:mx-[10%]'>
      
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointment />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        
      </Routes>
    </h1>
  )
}

export default App

