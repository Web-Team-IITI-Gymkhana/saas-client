import React from 'react';
import Chart from './Chart';

const ChartLayout = ({ title, description, cta, children }) => {
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
        {children || <Chart title={title} />}
      </div>
    </div>
  );
};

export default ChartLayout;
