import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/base/molecules/sidebar';
import DashboardLayout from './Dashboard';
import Searchbar from '../base/atoms/Searchbar';

const AppLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-saas-background text-saas-accent ">
      <div className="flex h-full">
        <Sidebar />
      </div>
      <div className="flex flex-col h-full w-full   overflow-x-hidden ">
        <DashboardLayout cta={<Searchbar />}>
          <Outlet />
        </DashboardLayout>
      </div>
    </div>
  );
};

export default AppLayout;
