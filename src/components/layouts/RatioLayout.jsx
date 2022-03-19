import React from 'react';
import { MATRICS } from '../../constants';
import { chartDataGenerator } from '../../utils/ChartDataGenerator';
import BarChart from '../base/molecules/Charts/BarChart';
import LineChart from '../base/molecules/Charts/LineChart';

const RatioLayout = ({ id, formData, title, description, cta, children }) => {
  const matrics = MATRICS[id];
  const matricsData = chartDataGenerator(id, formData);
  const DefaultComponent = ({ title }) => {
    return (
      <div className="flex flex-col">
        {matrics.dependency.map((dep, index) => {
          const data = chartDataGenerator(dep, formData);
          return <BarChart key={index} title={title} label={dep} data={data} />;
        })}
        <LineChart title={title} data={matricsData} label={id} />
      </div>
    );
  };
  return (
    <div className="flex flex-col h-full w-4/6 bg-saas-main ml-2 rounded-xl drop-shadow-sm p-6 hover:drop-shadow-xl">
      <div className="flex flex-row justify-between items-center">
        <div className="text-xl text-saas-accent pl-10">
          {title}
          <span className="text-xs">{description}</span>
        </div>
        {/* {cta} */}
      </div>
      <div className="w-full grow pt-10">
        {children || <DefaultComponent title={title} />}
      </div>
    </div>
  );
};

export default RatioLayout;
