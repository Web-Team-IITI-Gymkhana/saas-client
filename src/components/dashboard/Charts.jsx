import React, { useContext } from 'react';
import { Tabs } from 'antd';

import ChartLayout from '@/components/layouts/ChartLayout';

import dummy from '../../../demo.json';
import { isInsufficientData } from '../../utils/utils';
import { FEATURES } from '../../constants';
import Context from '../../context/context-config';

const { TabPane } = Tabs;

const Home = () => {
  const myContext = useContext(Context);
  const Company = myContext.selectedCompany;

  if (!Company) {
    return <div>No Company Selected</div>;
  }
  if (
    !Company._10k ||
    !Company._10q ||
    Company._10k.length === 0 ||
    Company._10q.length === 0
  ) {
    return <div>No Data Available</div>;
  }
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
