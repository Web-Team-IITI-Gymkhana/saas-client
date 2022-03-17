import React from 'react';
import { Tabs } from 'antd';

import ChartLayout from '@/components/layouts/ChartLayout';
import Searchbar from '@/components/base/atoms/Searchbar';

import { DataFormatter } from '../../utils/DataFormatter';

const df = new DataFormatter('1459417'); // initialise constructor with company id
const allFeatures = df.getAllFeatures();

const { TabPane } = Tabs;

const Home = () => {
  return (
    <Tabs className="text-saasdisabled h-full" defaultActiveKey="1">
      {/* <TabPane className="h-full hover:text-saasselected" tab="Price" key="1">
        <ChartLayout title={'Price'} cta={<Searchbar />} />
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane> */}
      {allFeatures.map((feature, idx) => (
        <TabPane
          className="h-full hover:text-saasselected"
          tab={feature}
          key={idx + 1}
        >
          <ChartLayout title={feature} cta={<Searchbar />} />
        </TabPane>
      ))}
    </Tabs>
  );
};

export default Home;
