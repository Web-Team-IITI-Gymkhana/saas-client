import React, { lazy } from 'react'
import AppLayout from '@/layouts/AppLayout'
import { useRoutes } from 'react-router-dom'

const Dashboard = lazy(() => import('@/components/dashboard/Home'))

// * When configuring routes refer to https://github.com/icd2k3/use-react-router-breadcrumbs
export const routes = () => [
  {
    element: <AppLayout /> ,
    children: [
      {
        path: '/',
        breadcrumb: 'Home',
        element: <Dashboard />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />,
            breadcrumb: 'Dashboard',
          },
        ],
      },
    ],
  },
]

const RouteComponent = () => {
  const Routes = useRoutes(routes())
  return <> {Routes} </>
}

export default RouteComponent
