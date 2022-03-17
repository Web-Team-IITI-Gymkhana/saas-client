import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/base/molecules/sidebar';
import DashboardLayout from './Dashboard';
import Searchbar from '../components/dashboard/Searchbar';

const AppLayout = () => {
  return (
    <div className="flex h-screen bg-saas-background text-saas-accent overflow-hidden">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <DashboardLayout cta={<Searchbar />}>
          <Outlet />
        </DashboardLayout>
      </div>
    </div>
  );
};

export default AppLayout;
