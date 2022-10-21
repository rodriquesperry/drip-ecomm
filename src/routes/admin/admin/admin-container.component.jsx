import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import AdminNav from './admin-nav.component';
import AdminSideMenu from './admin-side-menu.component';
import Dashboard from '../../../components/dashboard/dashboard.component';
import Table from '../../../routes/tables/table.component';

import './admin-container.styles.scss';

const Admin = () => {
  return (
    <div className='admin-container'>
      <div className='sideMenu'>
        <AdminSideMenu />
        </div>
        
        <div className='mainBody'>
        <AdminNav />
      </div>
    </div>
  );
};

export default Admin;
