import React from 'react';
import {
  LineChart as Chart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

function LineChart(props) {
  return (
    <div style={{ width: 'var(--chart-w)', height: 'var(--chart-h)' }}>
      <ResponsiveContainer width="100%" height="100%">
        <Chart width="var(--chart-w)" height="var(--chart-h)" data={props.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={props.label} stroke="var(--primary)" />
        </Chart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChart;
