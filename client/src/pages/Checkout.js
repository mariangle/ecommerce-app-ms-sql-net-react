import React, { useState, useEffect } from 'react';
import OrderSummary from "../components/checkout/OrderSummary"
import Payment from '../components/checkout/Payment';
import Account from '../components/checkout/Account';
import Details from '../components/checkout/Details';
import { Link } from 'react-router-dom';
import { selectCurrentUser } from '../store/reducers/userSlice';
import { useSelector } from 'react-redux';

const tabs = [
  { name: 'Account', required: true },
  { name: 'Details', required: true },
  { name: 'Payment', required: true },
];

function Checkout() {
  const [activeTab, setActiveTab] = useState(0);
  const currentUser = useSelector(selectCurrentUser)

  useEffect(() => {
    if (currentUser) {
      setActiveTab(1);

    }
  }, [currentUser]);

  const isLastTab = activeTab === tabs.length - 1;

  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <div className='checkout-top'>
          <h1>STORE</h1>
          <nav className='checkout-tabs'>
            {tabs.map((tab, index) => (
              <React.Fragment key={tab.name}>
                <a
                  className={index === activeTab ? 'active' : ''}
                > 
                  {tab.name}
                </a>
                {index < tabs.length - 1 && <p className="separator">{' > '}</p>}
              </React.Fragment>
            ))}
          </nav>
          <div className="checkout-container">
            {activeTab === 0 && <Account />}
            {activeTab === 1 && <Details />}
            {activeTab === 2 && <Payment />}
          </div>
        </div>
        <div className="checkout-bottom">
            {activeTab === 0 ? (
              <Link to="/cart"><button>Back</button></Link>
            ) : (
              <a><button onClick={() => setActiveTab(activeTab - 1)}>Back</button></a>
            )}
            {currentUser && !isLastTab && <a><button onClick={() => setActiveTab(activeTab + 1)}>Next</button></a> }
        </div>
      </div>
      <div className='checkout-right'>
        <OrderSummary/>
      </div>
    </div>
  )
}

export default Checkout;
