import Navbar from "./components/Navbar/Navbar"
import './App.css'

import React from 'react'
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar/>
      <Outlet/>
      <p>Footer</p>
    </div>
  )
}

export default App

