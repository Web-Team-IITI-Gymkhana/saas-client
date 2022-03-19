import React from 'react';
import Chart from 'react-apexcharts';
function SyncedChart(props) {
  const categories = props.data.map((d) => d.name);
  const values = props.data.map((d) => d[props.label]);
  const options1 = {
    chart: {
      id: 1,
      group: props.label
    },
    labels: {
      show: false
    },
    xaxis: {
      categories: categories
    },
    yaxis: {
      labels: {
        minWidth: 40
      }
    },
    tooltip: {
      shared: true,
      x: { show: false }
    }
  };
  const options2 = {
    chart: {
      id: 2,
      group: props.label
    },
    labels: {
      show: false
    },
    xaxis: {
      categories: categories
    },
    yaxis: {
      labels: {
        minWidth: 40
      },
      tooltip: {
        enabled: false
      }
    },
    tooltip: {
      shared: true,
      marker: false,
      y: { formatter: undefined },
      x: { show: false }
    }
  };
  const series = [
    {
      name: props.id,
      data: values
    }
  ];
  return (
    <>
      <Chart
        options={options1}
        series={series}
        type="line"
        width="100%"
        height={'100%'}
      />
      <Chart
        options={options2}
        series={series}
        type="line"
        width="100%"
        height={'100%'}
      />
    </>
  );
}

export default SyncedChart;
