import React from 'react';
import { Tabs } from 'antd';
import Searchbar from '@/components/base/atoms/Searchbar';
import RatioLayout from '@/components/layouts/RatioLayout';
const { TabPane } = Tabs;

const Analysis = () => {
  return (
    <Tabs className="text-saasdisabled h-full" defaultActiveKey="1">
      <TabPane className="h-full hover:text-saasselected" tab="Price" key="1">
        <RatioLayout title={'Price'} cta={<Searchbar />} />
      </TabPane>
    </Tabs>
  );
};

export default Analysis;
