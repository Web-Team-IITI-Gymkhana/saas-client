import React from 'react';
import { Tabs } from 'antd';
import Searchbar from '@/components/base/atoms/Searchbar';
import RatioLayout from '@/components/layouts/RatioLayout';
import MatricsCalculator from '../../utils/RatioCalculator';
const { TabPane } = Tabs;

const Analysis = () => {
  const MatricsService = new MatricsCalculator();
  const ratios = MatricsService.ratios;
  console.log(ratios);
  return (
    <Tabs className="text-saasdisabled h-full" defaultActiveKey="1">
      {Object.keys(ratios).map((key, index) => {
        if (!ratios[key] || ratios[key] === MatricsService.NotDefined) {
          return null;
        }
        return (
          <TabPane
            className="h-full hover:text-saasselected"
            tab={key}
            key={index + 1}
          >
            <RatioLayout title={key} cta={<Searchbar />} />
          </TabPane>
        );
      })}
    </Tabs>
  );
};

export default Analysis;
