import React from 'react';
import {
  BarChart as Chart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
  Tooltip
} from 'recharts';
function BarChart(props) {
  return (
    <div>
      <ResponsiveContainer
        width="100%"
        height="100%"
        minWidth="var(--chart-w)"
        minHeight="var(--chart-h)"
      >
        <Chart width="var(--chart-w)" height="var(--chart-h)" data={props.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={props.label} fill="var(--primary)" />
        </Chart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChart;
