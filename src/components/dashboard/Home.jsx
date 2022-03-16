import React from 'react';
import { Tabs } from 'antd';
import ChartLayout from './ChartLayout';
import Searchbar from './Searchbar';
const { TabPane } = Tabs;

const Home = () => {
  return (
    <Tabs className="text-saasdisabled h-full" defaultActiveKey="1">
      <TabPane className="h-full hover:text-saasselected" tab="Price" key="1">
        <ChartLayout title={'Price'} cta={<Searchbar />} />
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
};

export default Home;
