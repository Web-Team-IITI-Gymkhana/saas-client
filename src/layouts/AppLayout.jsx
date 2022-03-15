import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/base/molecules/sidebar'
import Navbar from '../components/Navbar'

const AppLayout = () => {
    return (
        <div className="flex h-screen bg-saasbg text-white overflow-hidden">
            <Sidebar />
            <div className="flex flex-col w-full h-full">
                <div>
                    <Navbar />
                </div>
                <div className='p-8 h-full rounded-tl-large bg-saasbgdark'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AppLayout
