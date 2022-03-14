import React from 'react'

import SidebarLogo from './SidebarLogo'
import SidebarTopItem from './SidebarTopItem'
import SidebarBottomItem from './SidebarBottomItem'

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-between w-52 h-full overflow-hidden text-white bg-saasbg">
      <div>
        <SidebarLogo />
        <div
          className={'flex flex-col items-center mt-12 border-t border-saasbg'}
        >
          <SidebarTopItem to="/" icon="cube">Dashboard</SidebarTopItem>
          <SidebarTopItem to="/2" icon="brain" >Metrics</SidebarTopItem>
          <SidebarTopItem to="/3" icon="database">Comparision</SidebarTopItem>
          <SidebarTopItem to="/4" icon="chart-pie" />
          <SidebarTopItem to="/5" icon="bell" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
