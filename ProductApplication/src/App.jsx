import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Addproduct from './components/Addproduct'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>        
      <Route path='/home'element={<Homepage />}></Route>
        <Route path='/addproduct'element={<Addproduct />}></Route>
        
      </Routes>
    </>
  )
}

export default App
