import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/student.css'; // Import the styles

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); 
    navigate('/'); 
  };

  return <button className="logout-button" onClick={handleLogout}>Logout</button>;
};

export default Logout;
