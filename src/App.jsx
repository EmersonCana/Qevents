import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import LandingTemplate from './components/templates/LandingTemplate'
import { MainBody } from './pages/MainBody'

function App() {

  return (
    <div className="container">
      <Routes>
        <Route element={<LandingTemplate />}>
          <Route path='/' element={<MainBody />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
