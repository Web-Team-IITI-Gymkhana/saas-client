import React from 'react'

import SidebarLogo from './SidebarLogo'
import SidebarTopItem from './SidebarTopItem'
import SidebarBottomItem from './SidebarBottomItem'

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-between w-52 h-full overflow-hidden text-white bg-saasbg">
      <div className="my-2">
        <SidebarLogo />
        <div
          className={'flex flex-col items-center mt-3 border-t border-gray-1100'}
        >
          <SidebarTopItem to="/1" icon="cube">Dashboard</SidebarTopItem>
          <SidebarTopItem to="/2" icon="brain" >Metrics</SidebarTopItem>
          <SidebarTopItem to="/3" icon="database">Comparision</SidebarTopItem>
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
