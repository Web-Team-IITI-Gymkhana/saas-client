import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/base/molecules/sidebar';
import DashboardLayout from './Dashboard';
import Searchbar from '../base/atoms/Searchbar';
import client from '../../apollo/';

import { gql } from '@apollo/client';

const AppLayout = () => {
  // const [companies, setCompanies] = useState();

  // useEffect(() => {
  //   const fetchCompanies = async () => {
  //     const res = await client.query({
  //       query: gql`
  //         query {
  //           getAllCompanies {
  //             id
  //             CompanyName
  //           }
  //         }
  //       `
  //     });

  //     console.log(res.data);
  //   };

  //   fetchCompanies();
  // }, []);

  return (
    <div className="flex h-screen bg-saas-background text-saas-accent overflow-hidden">
      <div className="flex h-full">
        <Sidebar />
      </div>
      <div className="flex flex-col h-full w-full overflow-y-hidden overflow-x-hidden mb-14">
        <DashboardLayout cta={<Searchbar />}>
          <Outlet />
        </DashboardLayout>
      </div>
    </div>
  );
};

export default AppLayout;
