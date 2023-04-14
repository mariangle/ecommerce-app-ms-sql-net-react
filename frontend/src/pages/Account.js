import React, { useState, useEffect } from 'react';
import Profile from '../components/account/EditProfile';
import Orders from '../components/account/MyOrders';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, setUser } from "../store/reducers/userSlice"

const tabs = ['Profile', 'My Orders', "Log Out"];

function MyAccount() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((selectCurrentUser));
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (!currentUser) {
      navigate('/authentication');

    }
  }, [currentUser, navigate]);

  const handleTabClick = (index) => {
    if (index === 2){
      dispatch(setUser(null))
    }
    setActiveTab(index);
  };
  
  return (
    <>
      {currentUser && (
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
          <div className='profile-container'>
            {activeTab === 0 && <Profile currentUser={currentUser} />}
            {activeTab === 1 && <Orders currentUser={currentUser}/>}
          </div>
        </div>
      )}
    </>
  );
  
}

export default MyAccount