import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  ReferenceArea
} from 'recharts';

const data = [
  {
    name: 2000,
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 2001,
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 2002,
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 2003,
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 2004,
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 2005,
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 2006,
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const getAxisYDomain = (from, to, ref, offset) => {
  // console.log(from, to);
  const refFrom = data.findIndex((x) => x.name === from);
  const refTo = data.findIndex((x) => x.name === to);
  // console.log(refFrom + 1, refTo + 1);
  const refData = data.slice(refFrom + 1 - 1, refTo + 1);
  // console.log(refData);

  let [bottom, top] = [refData[0][ref], refData[0][ref]];

  refData.forEach((d) => {
    if (d[ref] > top) top = d[ref];
    if (d[ref] < bottom) bottom = d[ref];
  });

  return [(bottom | 0) - offset, (top | 0) + offset];
};

function Chart(props) {
  const [initialState, setInitialState] = useState({
    data: data,
    left: 'dataMin',
    right: 'dataMax',
    refAreaLeft: '',
    refAreaRight: '',
    top: 'dataMax+1',
    bottom: 'dataMin-1',
    top2: 'dataMax+20',
    bottom2: 'dataMin-20',
    animation: true
  });

  const zoom = () => {
    let { refAreaLeft, refAreaRight, data } = initialState;

    if (refAreaLeft === refAreaRight || refAreaRight === '') {
      setInitialState((prevState) => ({
        ...prevState,
        refAreaLeft: '',
        refAreaRight: ''
      }));
      return;
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight)
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    // yAxis domain
    const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'uv', 1);

    setInitialState((prevState) => ({
      ...prevState,
      refAreaLeft: '',
      refAreaRight: '',
      data: data.slice(),
      left: refAreaLeft,
      right: refAreaRight,
      bottom,
      top
    }));
  };

  const zoomOut = () => {
    const { data } = initialState;
    setInitialState((prevState) => ({
      ...prevState,
      data: data.slice(),
      refAreaLeft: '',
      refAreaRight: '',
      left: 'dataMin',
      right: 'dataMax',
      top: 'dataMax+1',
      bottom: 'dataMin'
    }));
  };

  return (
    <div className="highlight-bar-charts" style={{ userSelect: 'none' }}>
      <button type="button" className="btn update" onClick={() => zoomOut()}>
        Zoom Out
      </button>
      <br />
      <hr />
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
          onMouseDown={(e) =>
            setInitialState({ ...initialState, refAreaLeft: e.activeLabel })
          }
          onMouseMove={(e) =>
            initialState.refAreaLeft &&
            setInitialState({ ...initialState, refAreaRight: e.activeLabel })
          }
          // eslint-disable-next-line react/jsx-no-bind
          onMouseUp={() => zoom()}
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
            allowDataOverflow
            domain={[initialState.left, initialState.right]}
          />
          <YAxis
            axisLine={{ stroke: '#151517', strokeWidth: 1 }}
            allowDataOverflow
            tick={{
              stroke: '#151517',
              fontSize: 'small',
              strokeWidth: 0.5
            }}
            domain={[initialState.bottom, initialState.top]}
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
            animationDuration={300}
          />
          {initialState.refAreaLeft && initialState.refAreaRight ? (
            <ReferenceArea
              x1={initialState.refAreaLeft}
              x2={initialState.refAreaRight}
              strokeOpacity={0.3}
            />
          ) : null}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Chart;
