import React from 'react';
import { Tabs } from 'antd';

import ChartLayout from '@/components/layouts/ChartLayout';

import dummy from '../../../demo.json';
import { isInsufficientData } from '../../utils/utils';
import { FEATURES } from '../../constants';

const { TabPane } = Tabs;
const Company = dummy[Object.keys(dummy)[0]];
const Home = () => {
  const formDataK = Company._10k;
  const formDataQ = Company._10q;
  return (
    <Tabs className="text-saasdisabled h-full" defaultActiveKey="1">
      {Object.keys(FEATURES).map((id, index) => {
        if (isInsufficientData(formDataQ, 'features', id)) {
          if (isInsufficientData(formDataK, 'features', id)) {
            return null;
          }
          return (
            <TabPane
              className="h-full hover:text-saasselected"
              tab={id}
              key={index + 1}
            >
              <ChartLayout id={id} formData={formDataK} title={id} />
            </TabPane>
          );
        }
        return (
          <TabPane
            className="h-full hover:text-saasselected"
            tab={id}
            key={index + 1}
          >
            <ChartLayout id={id} formData={formDataQ} title={id} />
          </TabPane>
        );
      })}
    </Tabs>
  );
};

export default Home;
