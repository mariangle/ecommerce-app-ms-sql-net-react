import React, { useState, useEffect } from 'react';
import Profile from '../components/account/EditProfile';
import Orders from '../components/account/MyOrders';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const tabs = ['Profile', 'My Orders'];

function MyAccount() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (!user) {
      navigate('/authentication');
    }
  }, [user, navigate]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      {user && (
        <div className="container account">
          <ul className='account-menu'>
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
          <div className='account-content'>
            {activeTab === 0 && <Profile user={user} />}
            {activeTab === 1 && <Orders user={user}/>}
          </div>
        </div>
      )}
    </>
  );
  
}



export default MyAccount