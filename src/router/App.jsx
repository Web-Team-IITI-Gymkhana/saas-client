import React, { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import AppLayout from '@/components/layouts/AppLayout';

const Dashboard = lazy(() => import('@/components/dashboard/Charts'));
const Analysis = lazy(() => import('@/components/dashboard/Analysis'));

// * When configuring routes refer to https://github.com/icd2k3/use-react-router-breadcrumbs
export const routes = () => [
  {
    element: <AppLayout />,
    children: [
      {
        path: '/charts',
        breadcrumb: 'Charts',
        element: <Dashboard />,
        caseSensitive: true
      },
      {
        path: '/analysis',
        breadcrumb: 'analysis',
        element: <Analysis />,
        caseSensitive: true
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to="/charts" />
  }
];

const RouteComponent = () => {
  const Routes = useRoutes(routes());
  return <> {Routes} </>;
};

export default RouteComponent;
