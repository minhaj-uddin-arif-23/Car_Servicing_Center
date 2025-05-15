import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div>
      <h1>
        <Navbar />
        <Outlet/>
      </h1>
    </div>
  )
}
