import React from 'react';

import { IoStatsChart } from 'react-icons/io5'
import { FaArrowRight } from 'react-icons/fa'

import Card from 'react-bootstrap/Card';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

import './bar-chart.styles.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 5
      }
    }
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      barPercentage: 0.5,
      label: 'In-store',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      barPercentage: 0.5,
      label: 'Online',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const BarChart = () => {
  return (
    <div className='barchart-container w-100 d-flex flex-column'>
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title>Total Sales By Month <IoStatsChart /></Card.Title>
          <Bar options={options} data={data} />
          <Card.Link href='#'><span className='more-details'>More Details <FaArrowRight /></span></Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BarChart;
