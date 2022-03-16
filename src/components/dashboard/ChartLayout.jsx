import React from 'react';
import Chart from './Chart';

const ChartLayout = ({ title, description, cta, children }) => {
  return (
    <div className="flex flex-col h-full w-4/6 bg-saaswhite rounded-large p-6">
      <div className="flex flex-row justify-between items-center">
        <div className="text-xl text-saastextdark pl-10">
          {title}
          <span className="text-xs">{description}</span>
        </div>
        {cta}
      </div>
      <div className="w-full grow pt-10">{children || <Chart />}</div>
    </div>
  );
};

export default ChartLayout;
