import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/base/molecules/sidebar';
import Navbar from '@/components/dashboard/Navbar';
import DashboardLayout from './Dashboard';
import Searchbar from '../components/dashboard/Searchbar';

const AppLayout = () => {
  return (
    <div className="flex h-screen bg-saasbgdark text-saastextdark overflow-hidden">
      <Sidebar />
      <div className="flex flex-col w-full h-full bg-saasbg p-5">
        <DashboardLayout cta={<Searchbar />}>
          <Outlet />
        </DashboardLayout>
      </div>
    </div>
  );
};

export default AppLayout;
