import React from 'react';
import '../../styles/student.css'; // Import the styles

const Profile = ({ onClose }) => {
  return (
    <div className="profile-overlay">
      <div className="profile-section">
        <h3>Student Profile</h3>
        <p>Name: John Doe</p>
        <p>Email: johndoe@example.com</p>
        <button onClick={onClose}>Close</button> {/* Close Button */}
      </div>
    </div>
  );
};

export default Profile;