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
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Page G',
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
          axisLine={{ stroke: 'white', strokeWidth: 2 }}
          tick={{
            stroke: 'white',
            fontSize: 'small'
          }}
        />
        <YAxis
          axisLine={{ stroke: 'white', strokeWidth: 2 }}
          tick={{
            stroke: 'white'
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
