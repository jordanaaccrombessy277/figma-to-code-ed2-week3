import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {Header,SideBar} from '../components'
import { useTheme } from '../context/ThemeContext'

export default function DashboardLayout() {
  
  const {theme} = useTheme();
  const [isOpenSideBar, setIsOpenSideBar] = useState(false)

  const handleOpenSideBar = () =>{
    setIsOpenSideBar(!isOpenSideBar)
  }

  return (
    <div className={`${theme === 'light' ? 'bg-tokena-white' : 'bg-tokena-dark-blue-1 text-tokena-white'} duration-1000 w-full h-auto flex`}> 
        <SideBar isOpenSideBar={isOpenSideBar} handleOpenSideBar={handleOpenSideBar} />
        <main className={`lg:w-5/6 w-full lg:ml-auto py-3`}>
          <Header handleOpenSideBar={handleOpenSideBar} />
          <Outlet />
        </main>
    </div>
  )
}
