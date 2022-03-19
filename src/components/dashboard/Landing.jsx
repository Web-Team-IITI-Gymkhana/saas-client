import React, { useContext } from 'react';
import Searchbar from '../base/atoms/Searchbar';
// import { Tabs } from 'antd';
// import RatioLayout from '@/components/layouts/RatioLayout';
// import dummy from '../../../demo.json';
// import { generateMatricsData } from '../../utils/MatrixDataGenerator';
// import { MATRICS } from '../../constants';
// import { isInsufficientData } from '../../utils/utils';
// import Context from '../../context/context-config';

// bg-gradient-to-br from-saas-accent via-saas-primary to-saas-main
// bg-gradient-to-br from-saas-primary to-saas-accent
//style_prop={{ background: 'white', width: '600px' }}

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-br from-saas-primary to-saas-accent">
      <div className="p-2 text-white text-5xl hover:drop-shadow-6xl font-serif">
        SEC Filing Analyzer for Saas Companies
      </div>
      <div className="p-2 text-white text-4xl font-serif">Team 17</div>
      <div className="p-4">
        <Searchbar style_prop={{ width: '350px' }} />
      </div>
    </div>
  );
};

export default LandingPage;
