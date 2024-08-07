//importing Libraries
import React from 'react';
import './OrderTable.css';

function OrderTable(){

  const orders = [
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Jane Cooper', orderNo: '48965786', amount: '$305.00', status: 'Delivered' },
    { customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88', status: 'Cancelled' },
    { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending' },
    { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
    { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
  ];

  return (
    <div className="order-table">
      <h2>Recent Orders</h2>
      <table >
        <thead>
          <tr className='tr'>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className='tr'>
              <td className=''><img src=
"https://png.pngtree.com/png-clipart/20200224/original/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_5233396.jpg"
                     className='p-2'  alt="Image" width="40px" height="40px"/>{order.customer} </td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td className='status'>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
