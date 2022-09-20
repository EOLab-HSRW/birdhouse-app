import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

function Layout() {
  return (
    <div class='flex flex-col min-h-screen'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout