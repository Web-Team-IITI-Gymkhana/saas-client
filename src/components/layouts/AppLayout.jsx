import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/base/molecules/sidebar';
import DashboardLayout from './Dashboard';
import Searchbar from '../base/atoms/Searchbar';

const AppLayout = () => {
  return (
    <div className="flex h-screen bg-saas-background text-saas-accent overflow-hidden">
      <div className="flex h-full">
        <Sidebar />
      </div>
      <div className="flex flex-col h-full w-full overflow-x-hidden overflow-y-auto mb-14">
        <DashboardLayout cta={<Searchbar />}>
          <Outlet />
        </DashboardLayout>
      </div>
    </div>
  );
};

export default AppLayout;
