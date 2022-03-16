import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const data = [
  {
    name: '2020_Q1',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: '2020_Q2',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: '2020_Q3',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: '2021_Q1',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: '2021_Q2',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: '2021_Q3',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: '2022_Q1',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

function Chart(props) {
  return (
    <ResponsiveContainer
      width="w-80%"
      height="h-60%"
      minWidth={500}
      minHeight={300}
    >
      <AreaChart
        data={data}
        margin={{
          top: 20,
          right: 40,
          left: 40,
          bottom: 10
        }}
      >
        <CartesianGrid
          vertical="true"
          horizontal="true"
          strokeDasharray="5 5"
        />
        <XAxis
          dataKey="name"
          axisLine={{ stroke: '#151517', strokeWidth: 1 }}
          tick={{
            stroke: '#151517',
            fontSize: 'small',
            strokeWidth: 0.5
          }}
        />
        <YAxis
          axisLine={{ stroke: '#151517', strokeWidth: 1 }}
          tick={{
            stroke: '#151517',
            fontSize: 'small',
            strokeWidth: 0.5
          }}
        />
        <Tooltip isAnimationActive={true} />
        <Area
          type="natural"
          dataKey="uv"
          activeDot={true}
          isAnimationActive={true}
          animationEasing="ease-in-out"
          stroke="#00A2FF"
          fill="#7B9FFA"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
export default Chart;
