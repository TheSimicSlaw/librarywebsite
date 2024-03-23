import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import SignInPage from './SignInPage';
import LibSignInPage from './LibSignInPage';
import AdminSignInPage from './AdminSignInPage';
import ProfSignInPage from './ProfSignInPage';
import HomePage from './HomePage';
import StudentHomePage from './studentHomePage';
import FacultyHomePage from './facultyHomePage';
import './App.css';



function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/libsignin" element={<LibSignInPage />} />
          <Route path="/adminsignin" element={<AdminSignInPage />} />
          <Route path="/profsignin" element={<ProfSignInPage />} />
          <Route path="/studenthomepage" element={<StudentHomePage />} />
          <Route path="/facultyhomepage" element={<FacultyHomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
