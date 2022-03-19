import React from 'react';
import { MATRICS } from '../../constants';
import { chartDataGenerator } from '../../utils/ChartDataGenerator';
import SyncedChart from '../base/molecules/Charts/SyncedChart';

const RatioLayout = ({ label, formData, title }) => {
  const matrics = MATRICS[label];
  const matricsData = chartDataGenerator(label, formData);
  const DefaultComponent = () => {
    const makeRatioId = `id${label}${label}`;
    return (
      <div className="flex flex-col">
        {matrics.dependency.map((dep, index) => {
          const data = chartDataGenerator(dep, formData);
          const makeId = `id${label}${dep}`;
          return (
            <div
              key={index}
              className="w-11/12 "
              style={{ height: 'var(--chart-h)' }}
            >
              <SyncedChart
                data={data}
                label={dep}
                id={makeId}
                group={label}
                type={'area'}
                width="var(--chart-w)"
                height="var(--chart-h)"
              />
            </div>
          );
        })}
        <div className="w-11/12" style={{ height: 'var(--chart-h)' }}>
          <SyncedChart
            id={makeRatioId}
            data={matricsData}
            label={label}
            group={label}
            type={'area'}
            width="var(--chart-w)"
            height="var(--chart-h)"
          />
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col h-full w-11/12 bg-saas-main ml-2 rounded-xl drop-shadow-sm p-6 hover:drop-shadow-xl">
      <div className="w-full grow">
        <DefaultComponent />
      </div>
    </div>
  );
};

export default RatioLayout;
