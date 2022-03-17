import React from 'react';
import BarChart from '../base/molecules/Charts/BarChart';
import LineChart from '../base/molecules/Charts/LineChart';

const RatioLayout = ({ title, description, cta, children }) => {
  const DefaultComponent = ({ title }) => {
    return (
      <div className="flex- flex-col">
        <BarChart title={title} />
        <BarChart title={title} />
        <LineChart title={title} />
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
        {cta}
      </div>
      <div className="w-full grow pt-10">
        {children || <DefaultComponent title={title} />}
      </div>
    </div>
  );
};

export default RatioLayout;
