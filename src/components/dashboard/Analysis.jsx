import React, { useContext } from 'react';
import { Tabs } from 'antd';
import RatioLayout from '@/components/layouts/RatioLayout';
import { generateMatricsData } from '../../utils/MatrixDataGenerator';
import { MATRICS } from '../../constants';
import { isInsufficientData } from '../../utils/utils';
import Context from '../../context/context-config';

const { TabPane } = Tabs;
// const Company = dummy[Object.keys(dummy)[0]];

const Analysis = () => {
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
  const formDataK = generateMatricsData(Company._10k);
  const formDataQ = generateMatricsData(Company._10q);
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
              <RatioLayout label={id} formData={formDataK} title={id} />
            </TabPane>
          );
        }
        return (
          <TabPane
            className="h-full hover:text-saasselected"
            tab={id}
            key={index + 1}
          >
            <RatioLayout label={id} formData={formDataQ} title={id} />
          </TabPane>
        );
      })}
    </Tabs>
  );
};

export default Analysis;
