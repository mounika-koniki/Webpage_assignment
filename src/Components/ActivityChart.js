import React from 'react';
import './Menu.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Dropdown from 'react-bootstrap/Dropdown';

const data = [
  { name: '5', value: 4000 },
  { name: '9', value: 3000 },
  { name: '11', value: 2000 },
  { name: '13', value: 2780 },
  { name: '15', value: 1890 },
  { name: '17', value: 2390 },
  { name: '19', value: 3490 },
  { name: '21', value: 4300 },
  { name: '23', value: 3100 },
];

const ActivityChart = () => {
  return (
    
    <div className='container'>
      <h3>Activity</h3>
      <Dropdown className='drop '>
      <Dropdown.Toggle id="dropdown-basic">
        Weekly
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Monday</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Tues</Dropdown.Item>
        <Dropdown.Item href="#/action-3">wed</Dropdown.Item>
        <Dropdown.Item href="#/action-1">thus</Dropdown.Item>
        <Dropdown.Item href="#/action-2">friday</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <ResponsiveContainer width="100%" height={300} className='activities'>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
    
    </div>
    
  );
};
export default ActivityChart;

