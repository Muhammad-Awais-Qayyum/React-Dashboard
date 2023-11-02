import React, { useState } from 'react';
import './CardDisplay.css';
import { LayoutGroup, motion } from 'framer-motion';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import { UilTimes } from '@iconscout/react-unicons';
import Chart from 'react-apexcharts';

const CardDisplay = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <LayoutGroup>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </LayoutGroup>
  );
};

function CompactCard({ param, setExpanded }) {
  const Png = param.png;

  return (
    <div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId="expandedCard"
    >
      <div className="bar">
        <CircularProgressbar value={param.barValue} text={`${param.barValue}%`} />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
}

function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: 'area',
        height: 'auto',
      },
      dropShadow: {
        enabled: false,
        enabledSeries: undefined, // Changed to 'enabledSeries'
        top: 0,
        left: 0,
        blur: 3,
        opacity: 0.5,
        color: '#000',
      },
      fill: { // Corrected 'fil' to 'fill'
        colors: ['#fff'],
        type: 'gradient',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: ['white'],
        width: 2,
        dashArray: 0,
      },
      tooltip: {
        x: {
          format: 'dd MMM',
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2023-09-19T00:00:00.000Z',
          '2023-09-19T01:30:00.000Z',
          '2023-09-19T02:30:00.000Z',
          '2023-09-19T03:30:00.000Z',
          '2023-09-19T04:30:00.000Z',
          '2023-09-19T05:30:00.000Z',
          '2023-09-19T06:30:00.000Z',
        ],
      },
    },
  };

  return (
    <div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandedCard"
    >
      <div  style={{alignSelf:'flex-end',cursor:'pointer',color:'white'}}>
        <UilTimes onClick={setExpanded}
       
        />
      </div>
      <span className='title'>{param.title}</span>

      <div className="chart">
        <Chart
          series={param.series}
          options={data.options}
          type="area"
          
        />
      </div>
      <span>Last 24 hours</span>
    </div>
  );
}

export default CardDisplay;