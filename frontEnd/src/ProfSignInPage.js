import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './profSignIn.css';

function ProfSignInPage() {
  const [FacultyID, setFacultyID] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!FacultyID || !password) {
      setErrorMessage('Please enter both username and password');
      return;
    }

    const dummyFaculty = {
      faculty1: 'password1',
      faculty2: 'password2',
      faculty3: 'password3'
    };

    if(dummyFaculty.hasOwnProperty(FacultyID)) {
      if(password === dummyFaculty[FacultyID]) {
        navigate('/facultyhomepage');
        return;
      }
    }

    console.log('Signing in', { FacultyID, password });
    setFacultyID('');
    setPassword('');
    setErrorMessage('');
  };

  return (
    <div className="signInWrapper">
      <h1 className="header">Professor Login</h1>
      <div className="signInContainer">
        <h2 className="title">Sign In</h2>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <form onSubmit={handleSignIn} className="signInForm">
          <div className="inputGroup">
            <label className="inFormText" htmlFor="FacultyID">Username</label>
            <input
              type="text"
              id="FacultyID"
              value={FacultyID}
              onChange={(e) => setFacultyID(e.target.value)}
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

export default ProfSignInPage;
