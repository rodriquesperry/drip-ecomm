import React from 'react';

import PieChartCard from './data/pie/pie-chart-card.component';
import ProgressBarcard from './data/progress-bar/progressbar-card.component';
import BarChart from './data/bar-chart/bar-chart.componenent';
import Members from './data/members/members.component';
import InventoryCard from './data/inventory/inventory-card.component';

import './dashboard.styles.scss';

const Dashboard = () => {
  const handleScroll = (e) => {
    console.log('scrollTop: ', e.currentTarget.scrollTop);
    console.log('offsetHeight:', e.currentTarget.offsetHeight);

    if (e.currentTarget.scrollTop > 0) {
      document.querySelector('.nav').classList.add('dash-scroll');
    } else {
      document.querySelector('.nav').classList.remove('dash-scroll');
    }
  };

  return (
    <>
      <div className='d-flex card-section'>
        <div className='dashboard-card-container' onScroll={handleScroll}>
          <div>
            <ProgressBarcard />
            <BarChart />
          </div>
          <PieChartCard />
          <Members />
          <InventoryCard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
