import React from 'react'

import SidebarLogo from './SidebarLogo'
import SidebarTopItem from './SidebarTopItem'
import SidebarBottomItem from './SidebarBottomItem'

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-between w-16 h-full overflow-hidden text-white bg-gray-900">
      <div className="my-2">
        <SidebarLogo />
        <div
          className={'flex flex-col items-center mt-3 border-t border-gray-700'}
        >
          <SidebarTopItem to="/1" icon="cube" />
          <SidebarTopItem to="/2" icon="brain" />
          <SidebarTopItem to="/3" icon="database" />
          <SidebarTopItem to="/4" icon="chart-pie" />
          <SidebarTopItem to="/5" icon="bell" />
        </div>
      </div>
      <div>
        <SidebarBottomItem icon="gear" />
      </div>
    </div>
  )
}

export default Sidebar
