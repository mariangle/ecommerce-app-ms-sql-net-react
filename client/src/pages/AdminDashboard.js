import React, { useState } from 'react';
import Users from '../components/admin/UsersManagement';
import Products from '../components/admin/ProductsManagement';
import styled from 'styled-components';
import { Container } from '../styles/styles';

const tabs = ['Products', 'Orders', 'Users',];

function AdminPanel() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <StyledAdminPanel>
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={tab}
            className={index === activeTab ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </li>
        ))}
      </ul>
      {activeTab === 0 && <Products />}
      {activeTab === 2 && <Users />}
    </StyledAdminPanel>
  );
}

const StyledAdminPanel = styled(Container)`
flex-direction: column;
justify-content: flex-start;
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    border: 1px solid #ccc;
  }

  li {
    border-bottom: none;
    cursor: pointer;
    padding: 10px;
    text-align: center;
  }

  li.active {
    background-color: #f0f0f0;
    }
`;

export default AdminPanel