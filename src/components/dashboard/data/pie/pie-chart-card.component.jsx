import { FaChartLine, FaArrowRight } from 'react-icons/fa';

import Card from 'react-bootstrap/Card';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChertCard = ({ children }) => {
  const data = {
    labels: ['Google', 'Yahoo', 'Bing', 'Organic'],
    datasets: [
      {
        weight: 1,
        label: '# of Votes',
        data: [19, 12, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='pie-chart-container'>
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title>
            Traffic by Source
            <span className='cardIcon'>
              <FaChartLine />
            </span>
          </Card.Title>
          <Pie data={data} className='pie' />
          <br />
          <br />
          <Card.Link href='#'><span className='more-details'>More Details <FaArrowRight /></span></Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PieChertCard;
