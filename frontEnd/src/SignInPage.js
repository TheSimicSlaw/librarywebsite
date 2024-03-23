// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './signIn.css'; // Make sure the CSS file is correctly linked

// function SignInPage() {
//   const [StudentID, setStudentID] = useState('');
//   const [ContactNumber, setContactNumber] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSignIn = async (e) => {
//     e.preventDefault();

//     if (!StudentID || !ContactNumber) {
//       setErrorMessage('Please enter both Student ID and password');
//       return;
//     }

//     try {
//       const response = await fetch('/api/authenticate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ StudentID, ContactNumber }),
//       });

//       if (!response.ok) {
//         throw new Error('Authentication failed');
//       }

//       navigate('/studentHomePage');
//     } catch (error) {
//       console.error('Error:', error);
//       setErrorMessage('Failed to authenticate. Please check your Student ID and password.');
//     }

//     // Reset the form fields
//     setStudentID('');
//     setContactNumber('');
//   };

//   return (
//     <div className="signInWrapper">
//       <h1 className="header">Student Login</h1>
//       <div className="signInContainer">
//         <h2 className="title">Sign In</h2>
//         {errorMessage && <p className="error">{errorMessage}</p>}
//         <form onSubmit={handleSignIn} className="signInForm">
//           <div className="inputGroup">
//             <label className="inFormText" htmlFor="StudentID">Usernam</label>
//             <input
//               type="text"
//               id="StudentID"
//               value={StudentID}
//               onChange={(e) => setStudentID(e.target.value)}
//             />
//           </div>
//           <div className="inputGroup">
//             <label className="inFormText" htmlFor="ContactNumber">Password</label>
//             <input
//               type="password"
//               id="ContactNumber"
//               value={ContactNumber}
//               onChange={(e) => setContactNumber(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="signIn">Sign In</button>
//           <Link to="/profSignIn" className="profSignIn">Professor Sign in</Link>
//           <Link to="/libSignIn" className="libSignIn">Librarian Sign in</Link>
//           <Link to="/adminSignIn" className="adminSignIn">Admin Sign in</Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignInPage;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signIn.css'; // Make sure the CSS file is correctly linked

function SignInPage() {
  const [StudentID, setStudentID] = useState('');
  const [ContactNumber, setContactNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!StudentID || !ContactNumber) {
      setErrorMessage('Please enter both Student ID and password');
      return;
    }

    // Dummy username-password pairs
    const dummyUsers = {
      user1: 'password1',
      user2: 'password2',
      user3: 'password3'
    };

    // Check if the provided username exists in the dummy users
    if (dummyUsers.hasOwnProperty(StudentID)) {
      // Check if the provided password matches the stored password
      if (ContactNumber === dummyUsers[StudentID]) {
        // Passwords match, authentication successful
        navigate('/studenthomepage');
        return;
      }
    }

    // If username or password is incorrect, show error message
    setErrorMessage('Invalid username or password');

    // Reset the form fields
    setStudentID('');
    setContactNumber('');
  };

  return (
    <div className="signInWrapper">
      <h1 className="header">Student Login</h1>
      <div className="signInContainer">
        <h2 className="title">Sign In</h2>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <form onSubmit={handleSignIn} className="signInForm">
          <div className="inputGroup">
            <label className="inFormText" htmlFor="StudentID">Username</label>
            <input
              type="text"
              id="StudentID"
              value={StudentID}
              onChange={(e) => setStudentID(e.target.value)}
            />
          </div>
          <div className="inputGroup">
            <label className="inFormText" htmlFor="ContactNumber">Password</label>
            <input
              type="password"
              id="ContactNumber"
              value={ContactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <button type="submit" className="signIn">Sign In</button>
          <Link to="/profSignIn" className="profSignIn">Professor Sign in</Link>
          <Link to="/libSignIn" className="libSignIn">Librarian Sign in</Link>
          <Link to="/adminSignIn" className="adminSignIn">Admin Sign in</Link>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
