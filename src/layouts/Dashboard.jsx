import React from 'react'

import RouteCrumb from '@/components/base/molecules/RouteCrumb'
import { Scrollbars } from 'react-custom-scrollbars';

const DashboardLayout = ({
  description,
  cta,
  children,
}) => {
  return (
      <div className="flex flex-col h-full w-full gap-6 overflow-y-auto scroll-smooth hover:scroll-auto">
      <div className="flex justify-between items-center">
        <div>
          <RouteCrumb />
          <span className="text-xs">{description}</span>
        </div>
        {cta}
      </div>
      <div className="w-full grow">{children}</div>
      </div>
  )
}

export default DashboardLayout