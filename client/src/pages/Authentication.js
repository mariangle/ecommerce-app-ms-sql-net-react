import React, { useState } from 'react';
import Register from "../components/auth/RegisterForm";
import Login from "../components/auth/LoginForm";

function Authentication() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className='auth container'>
      <div className='auth-container'>
        {activeTab === 'login' && <Login />}
        {activeTab === 'signup' && <Register />}
      </div>
      <div>
        <a
          className={`tab ${activeTab === 'login' ? 'active' : ''}`}
          onClick={() => setActiveTab('login')}>
          Already a member?
        </a>
        <a
          className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
          onClick={() => setActiveTab('signup')}>
          Not a member yet?
        </a>
      </div>
    </div>
  );
}

export default Authentication;
