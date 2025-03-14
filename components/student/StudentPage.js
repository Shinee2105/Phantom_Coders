import React, { useState } from 'react';
import Profile from './Profile';
import '../../styles/student.css';
import Logout from './Logout'; // Assuming Logout is a component (button)
import { useLocation } from 'react-router-dom'; // Import useLocation

const StudentPage = () => {
  const [showProfile, setShowProfile] = useState(false);
  const location = useLocation(); // Use the useLocation hook
  const username = location.state?.username || "Student"; // Get username from state or default

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <h1>Welcome Back, {username}!</h1> {/* Personalized welcome message */}
      <button
        className="profile-button"
        onClick={handleProfileClick}
        style={{ position: 'absolute', top: '10px', left: '10px', margin: 0 }}
      >
        P
      </button>

      <Logout className="logout-button" />

      {showProfile && <Profile onClose={handleCloseProfile} />}
    </div>
  );
};

export default StudentPage;