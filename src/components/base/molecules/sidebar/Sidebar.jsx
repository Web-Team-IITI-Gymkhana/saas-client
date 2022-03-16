import React from 'react';

import SidebarLogo from './SidebarLogo';
import SidebarTopItem from './SidebarTopItem';
import SidebarBottomItem from './SidebarBottomItem';
import CompanyProfile from './CompanyProfile';
// import { CircularProgress } from '@mui/material';

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-between w-80 h-full overflow-hidden text-saasdisabled pr-3 pl-3">
      <div className="w-full">
        <SidebarLogo />
        <div className="flex flex-col w-full pl-2 items-center mt-2 border-t border-saasbg">
          <CompanyProfile>
            <div className="text-lg">ZOOM INC</div>
          </CompanyProfile>
          <div className="flex flex-col w-full pl-3 items-center">
            <SidebarTopItem to="/" icon="chart-line">
              Charts
            </SidebarTopItem>
            <SidebarTopItem to="/2" icon="brain">
              Analysic
            </SidebarTopItem>
            <SidebarTopItem to="/3" icon="database">
              SEC Fillings
            </SidebarTopItem>
            <SidebarTopItem to="/4" icon="chart-bar">
              Comparision
            </SidebarTopItem>
          </div>
        </div>
      </div>
      <SidebarBottomItem>
        <div className="flex flex-col items-center">
          <div className="text-lg pt-3 pb-5">Overall Score</div>
          {/* <CircularProgress value={60} variant="determinate" color="inherit" /> */}
        </div>
      </SidebarBottomItem>
    </div>
  );
};

export default Sidebar;
