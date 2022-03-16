import React from 'react';

import DashboardLayout from '@/layouts/Dashboard';
import { Tabs } from 'antd';
import Chart from './Chart';
const { TabPane } = Tabs;

const Home = () => {
  return (
    <DashboardLayout>
      <Tabs className="text-saasdisabled h-full" defaultActiveKey="1">
        <TabPane className=" hover:text-saasselected" tab="Price" key="1">
          <Chart />
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </DashboardLayout>
  );
};

export default Home;
