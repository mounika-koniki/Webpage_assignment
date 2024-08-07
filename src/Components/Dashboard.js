import React from 'react';
import { FaBox, FaCheckCircle, FaTimesCircle, FaDollarSign, FaMoneyBillWave } from 'react-icons/fa';
import StatsCard from './StatsCard';
import OrderTable from './OrderTable';
import Feedback from './Feedback';
import './Dashboard.css';
import Navbarcomp from '../Navbarcomp';
import ActivityChart from './ActivityChart';
import Menu from './Menu';


function Dashboard (){

  return (
    <div className="dashboard">
      <Navbarcomp />
      {/* <div className='secondnav'>
        <Navbarhori />
      </div> */}
      <h4 className='heading'>Dashboard</h4>
      <div className="stats">
        <StatsCard icon={<FaBox />} label="Total Orders" value="75" trend="3%" />
        <StatsCard icon={<FaCheckCircle />} label="Total Delivered" value="70" trend="3%" />
        <StatsCard icon={<FaTimesCircle />} label="Total Cancelled" value="05" trend="3%" />
        <StatsCard icon={<FaDollarSign />} label="Total Revenue" value="$12k" trend="3%" />
        <div >
        <StatsCard className='Profit' icon={<FaMoneyBillWave />} label="Net Profit" value="$6759.25" trend="3%" />
        </div>
      </div>
      <div className="activity">
        <ActivityChart />
        {/* <Menu /> */}
      </div>
      <div className="orders-feedback">
        <OrderTable />
        <Feedback />
      </div>
    </div>
  );
};

export default Dashboard;
