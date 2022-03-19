import React, { useContext } from 'react';
import { Tabs } from 'antd';

import ChartLayout from '@/components/layouts/ChartLayout';

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
      {Object.keys(FEATURES).map((label, index) => {
        if (isInsufficientData(formDataQ, 'features', label)) {
          if (isInsufficientData(formDataK, 'features', label)) {
            return null;
          }
          return (
            <TabPane
              className="h-full hover:text-saasselected"
              tab={label}
              key={index + 1}
            >
              <ChartLayout label={label} formData={formDataK} />
            </TabPane>
          );
        }
        return (
          <TabPane
            className="h-full hover:text-saasselected"
            tab={label}
            key={index + 1}
          >
            <ChartLayout label={label} formData={formDataQ} />
          </TabPane>
        );
      })}
    </Tabs>
  );
};

export default Home;
