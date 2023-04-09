import React, { useState } from 'react';
import Users from '../components/admin/UsersTable';
import Orders from '../components/admin/OrdersTable';
import Products from '../components/admin/ProductsTable';

const tabs = ['Products', 'Orders', 'Users',];

function AdminPanel() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="admin container">
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </li>
        ))}
      </ul>
      {activeTab === 0 && <Products />}
      {activeTab === 1 && <Orders />}
      {activeTab === 2 && <Users />}
    </div>
  );
}



export default AdminPanel