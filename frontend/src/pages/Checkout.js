import React, { useState, useEffect } from 'react';
import Payment from '../components/checkout/Payment';
import LogIn from '../components/checkout/LogIn';
import Shipping from '../components/checkout/Shipping';
import Confirmation from '../components/checkout/Confirmation';
import Complete from "../components/checkout/Complete"

import { Link } from 'react-router-dom';
import { selectCurrentUser } from '../store/reducers/userSlice';
import { useSelector } from 'react-redux';

const tabs = ["Log In", "Shipping", "Payment", "Confirm", "Done"];

function Checkout() {
  const [activeTab, setActiveTab] = useState(0);
  const currentUser = useSelector(selectCurrentUser);
  
  useEffect(() => {
    if (currentUser) {
      setActiveTab(1);
    }
  }, [currentUser]);

  const isLastTab = activeTab === tabs.length - 1;
  const isSecondLastTab = activeTab === tabs.length - 2;

  const onPaymentComplete = () => {
    setActiveTab(4);
  };

  return (
    <div className='checkout'>
      <div className='checkout-container'>
        <nav className='checkout-nav'>
          {tabs.map((tab, index) => (
            <React.Fragment key={tab}>
              <div className={`checkout-tab ${index === activeTab ? 'active' : ''}`}>
                <span className={`${index < activeTab ? 'completed' : ''}`}>
                  {index+1}
                </span>
                <p>{tab}</p>
              </div>
              {index < tabs.length - 1 && (
                <div className={`checkout-tab-line ${index < activeTab ? 'completed' : ''}`} />
              )}
            </React.Fragment>
          ))}
        </nav>
        <div className="checkout-content">
          {activeTab === 0 && <LogIn />}
          {activeTab === 1 && <Shipping />}
          {activeTab === 2 && <Payment />}
          {activeTab === 3 && <Confirmation onPaymentComplete={onPaymentComplete}/>}
          {activeTab === 4 && <Complete />}
        </div>
        <div className="checkout-bottom">
          {!isLastTab ? (
            activeTab === 0 ? (
              <Link to="/cart"><button className='second-button'>Back</button></Link>
            ) : (
              <a><button className='second-button' onClick={() => setActiveTab(activeTab - 1)}>Back</button></a>
            )
          ) : null}
          {currentUser && !isSecondLastTab && !isLastTab && (
            <a><button onClick={() => setActiveTab(activeTab + 1)}>Next</button></a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Checkout;
