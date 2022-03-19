import React, { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import AppLayout from '@/components/layouts/AppLayout';
// import Breadcrumb from '../components/folder/Breadcrumb';

const Info = lazy(() => import('@/components/dashboard/Info'));
const Dashboard = lazy(() => import('@/components/dashboard/Charts'));
const Analysis = lazy(() => import('@/components/dashboard/Analysis'));
const SecFilling = lazy(() => import('@/components/dashboard/SecFilling'));
const LandingPage = lazy(() => import('@/components/dashboard/Landing'));

// * When configuring routes refer to https://github.com/icd2k3/use-react-router-breadcrumbs
export const routes = () => [
  {
    element: <LandingPage />,
    children: [
      {
        path: '/app',
        breadcrumb: 'Landing Page',
        element: <LandingPage />,
        caseSensitive: true
      }
    ]
  },

  {
    element: <AppLayout />,
    children: [
      {
        path: '/info',
        breadcrumb: 'Profile',
        element: <Info />,
        caseSensitive: true
      },
      {
        path: '/charts',
        breadcrumb: 'Charts',
        element: <Dashboard />,
        caseSensitive: true
      },
      {
        path: '/analysis',
        breadcrumb: 'Analysis',
        element: <Analysis />,
        caseSensitive: true
      },
      {
        path: '/secfilling',
        breadcrumb: ' SEC Fillings ',
        element: <SecFilling />,
        caseSensitive: true
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to="/app" />
  }
];

const RouteComponent = () => {
  const Routes = useRoutes(routes());
  return <> {Routes} </>;
};

export default RouteComponent;
