import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Contact } from './pages/Contact'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
