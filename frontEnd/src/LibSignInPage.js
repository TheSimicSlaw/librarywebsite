import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './libSignIn.css'; 

function LibSignInPage() {
  const [librarianID, setLibrarianID] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!librarianID || !password) {
      setErrorMessage('Please enter both username and password');
      return;
    }
    
    const dummyLibrarian = {
      librarian1: 'password1',
      librarian2: 'password2',
      librarian3: 'password3'
    };

    if(dummyLibrarian.hasOwnProperty(librarianID)) {
      if(password === dummyLibrarian[librarianID]) {
        navigate('/librarianhomepage');
        return;
      }
    }

    console.log('Signing in', { username: librarianID, password });
    setLibrarianID('');
    setPassword('');
    setErrorMessage('');
  };

  return (
    <div className="signInWrapper">
      <h1 className="header">Librarian Login</h1>
      <div className="signInContainer">
        <h2 className="title">Sign In</h2>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <form onSubmit={handleSignIn} className="signInForm">
          <div className="inputGroup">
            <label className="inFormText" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={librarianID}
              onChange={(e) => setLibrarianID(e.target.value)}
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

export default LibSignInPage;
