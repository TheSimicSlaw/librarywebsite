import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './adminSignIn.css'; 

function AdminSignInPage() {
  const [adminID, setAdminID] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!adminID || !password) {
      setErrorMessage('Please enter both username and password');
      return;
    }

    const dummyAdmin = {
      admin1: 'password1',
      admin2: 'password2',
      admin3: 'password3'
    };

    if(dummyAdmin.hasOwnProperty(AdminID)) {
      if(password === dummyAdmin[AdminID]) {
        navigate('/adminhomepage');
        return;
      }
    }

    console.log('Signing in', { username: adminID, password });
    setAdminID('');
    setPassword('');
    setErrorMessage('');
  };

  return (
    <div className="signInWrapper">
      <h1 className="header">Admin Login</h1>
      <div className="signInContainer">
        <h2 className="title">Sign In</h2>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <form onSubmit={handleSignIn} className="signInForm">
          <div className="inputGroup">
            <label className="inFormText" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={adminID}
              onChange={(e) => setAdminID(e.target.value)}
            />
          </div>
          <div className="inputGroup">
            <label className="inFormText" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="signIn">Sign In</button>

        </form>
      </div>
    </div>
  );
}

export default AdminSignInPage;
