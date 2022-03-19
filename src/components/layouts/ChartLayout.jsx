import React from 'react';
import { chartDataGenerator } from '../../utils/ChartDataGenerator';
import Summary from '../base/molecules/Summary';
import SyncedChart from '../base/molecules/Charts/SyncedChart';

const summaryList = [
  {
    sentence:
      'The company has priced its public offering of 15 million shares of common stock at a price to the public of $24 per share.',
    date: '2020-08-05',
    sentiment: 'Negative'
  },
  {
    sentence:
      'The company has priced its public offering of 15 million shares of common stock at a price to the public of $24 per share.',
    date: '2020-08-05',
    sentiment: 'Positive'
  },
  {
    sentence:
      'The company has priced its public offering of 15 million shares of common stock at a price to the public of $24 per share.',
    date: '2020-08-05',
    sentiment: 'Negative'
  },
  {
    sentence:
      'The company has priced its public offering of 15 million shares of common stock at a price to the public of $24 per share.',
    date: '2020-08-05',
    sentiment: 'Negative'
  },
  {
    sentence:
      'The company has priced its public offering of 15 million shares of common stock at a price to the public of $24 per share.',
    date: '2020-08-05',
    sentiment: 'Negative'
  },
  {
    sentence:
      'The company has priced its public offering of 15 million shares of common stock at a price to the public of $24 per share.',
    date: '2020-08-05',
    sentiment: 'Negative'
  },
  {
    sentence:
      'Company has used the net proceeds from the offering of base notes to repay all amounts outstanding under the credit facility.',
    date: '2020-04-20',
    sentiment: 'Neutral'
  },
  {
    sentence:
      'The notes will be convertible into shares of the company\u2019s common stock at an initial conversion rate of 35.3773 shares.',
    date: '2020-04-20',
    sentiment: 'Neutral'
  },
  {
    sentence:
      'Pursuant to the indenture, the notes will be convertible at the company\u2019s option into shares of the company\u2019s common stock.',
    date: '2020-04-20',
    sentiment: 'Neutral'
  },
  {
    sentence:
      'Pricing of base notes on 20, 2020premium of 100% over last reported sale price of company\u2019s common stock.',
    date: '2020-04-20',
    sentiment: 'Neutral'
  },
  {
    sentence:
      'Company to use portion of proceeds from offering to repay all amounts outstanding under term loan.',
    date: '2020-04-20',
    sentiment: 'Neutral'
  },
  {
    sentence:
      'The notes will be convertible at 2u\u2019s option into shares of 2u\u2019s common stock.',
    date: '2020-04-20',
    sentiment: 'Neutral'
  }
];
const ChartLayout = ({ names, label, formData }) => {
  const chartsData = formData.map((fd) => chartDataGenerator(label, fd));
  const DefaultComponent = () => {
    const id = `id${label}ind`;
    return (
      <div className="flex flex-col">
        <div
          style={{ width: 'var(--chart-w)', height: 'var(--chart-h-lg)' }}
          className="p-3"
        >
          <SyncedChart
            names={names}
            data={chartsData}
            label={label}
            id={id}
            type={'bar'}
            width="var(--chart-w)"
            height="var(--chart-h-lg)"
          />
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-row h-full w-full ml-2 p-6">
      <div className="flex flex-col h-full w-9/12 bg-saas-main ml-2 rounded-xl drop-shadow-sm p-6 hover:drop-shadow-xl">
        <div className="w-full grow pt-10">
          <DefaultComponent />
        </div>
      </div>
      <Summary summaryList={summaryList} />
    </div>
  );
};

export default ChartLayout;
