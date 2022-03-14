import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/base/molecules/sidebar'
import Navbar from '../components/Navbar'

const AppLayout = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="w-full h-full">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default AppLayout
