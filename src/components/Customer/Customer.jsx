import React from 'react'
import './Customer.css'
import Chart from 'react-apexcharts';
const Customer = () => {
    const data = {
        series:[
            {
                name:"Review",
                data:[10,50,30,90,40,150,100]
            }
        ],
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
    <div>
        <Chart type='line'  series={data.series} options={data.options}/>
    </div>
  )
}

export default Customer