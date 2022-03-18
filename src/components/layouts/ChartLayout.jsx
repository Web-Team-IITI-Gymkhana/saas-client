import React from 'react';
import { chartDataGenerator } from '../../utils/ChartDataGenerator';
import LineChart from '../base/molecules/Charts/LineChart';

const ChartLayout = ({ id, formData, title, description, cta, children }) => {
  const chartData = chartDataGenerator(id, formData);
  const DefaultComponent = ({ title }) => {
    return (
      <div className="flex flex-col">
        <LineChart title={title} data={chartData} label={id} />
      </div>
    );
  };
  return (
    <div className="flex flex-col h-full w-4/6 bg-saas-main ml-2 rounded-xl drop-shadow-sm p-6 hover:drop-shadow-xl">
      <div className="flex flex-row justify-between items-center">
        <div className="text-xl text-saas-accent">
          {title}
          <span className="text-xs">{description}</span>
        </div>
        {cta}
      </div>
      <div className="w-full grow pt-10">
        {children || <DefaultComponent title={title} />}
      </div>
    </div>
  );
};

export default ChartLayout;
