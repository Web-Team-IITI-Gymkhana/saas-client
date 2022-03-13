import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/base/molecules/sidebar'

const AppLayout = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="p-4 w-full h-full">
                <Outlet />
            </div>
        </div>
    )
}

export default AppLayout
