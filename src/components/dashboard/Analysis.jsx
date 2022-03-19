import React, { useContext } from 'react';
import { Tabs } from 'antd';
import RatioLayout from '@/components/layouts/RatioLayout';
import dummy from '../../../demo.json';
import { generateMatricsData } from '../../utils/MatrixDataGenerator';
import { MATRICS } from '../../constants';
import { isInsufficientData } from '../../utils/utils';
import Context from '../../context/context-config'

const { TabPane } = Tabs;
// const Company = dummy[Object.keys(dummy)[0]];

const Analysis = () => {

  const myContext = useContext(Context)
  const Company = myContext.selectedCompany

  if (!Company) {
    return <div>No Company Selected</div>
  }

  const formDataK = Company._10k ? Company._10k : {};
  const formDataQ = Company._10q ? Company._10q : {};

  // const formDataK = generateMatricsData(Company._10k);
  // const formDataQ = generateMatricsData(Company._10q);
  return (
    <Tabs className="text-saasdisabled h-full" defaultActiveKey="1">
      {Object.keys(MATRICS).map((id, index) => {
        if (isInsufficientData(formDataQ, 'matrics', id)) {
          if (isInsufficientData(formDataK, 'matrics', id)) {
            return null;
          }
          return (
            <TabPane
              className="h-full hover:text-saasselected"
              tab={id}
              key={index + 1}
            >
              <RatioLayout id={id} formData={formDataK} title={id} />
            </TabPane>
          );
        }
        return (
          <TabPane
            className="h-full hover:text-saasselected"
            tab={id}
            key={index + 1}
          >
            <RatioLayout id={id} formData={formDataQ} title={id} />
          </TabPane>
        );
      })}
    </Tabs>
  );
};

export default Analysis;
